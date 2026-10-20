// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import client from "./src/data/client.json" with { type: "json" };
import { siteFonts } from "./src/design/fonts.mjs";
import llmsMd from "./src/integrations/llms-md.mjs";

/** Pages techniques, jamais indexées (sitemap + robots.txt). */
export const NON_INDEXABLE_PATHS = ["/admin/", "/client-config/"];

/**
 * Astro 7.3 + Vite 8 : le plugin des server islands réécrit le marqueur
 * `$$server-islands-map$$` jusque dans le chunk qui contient son propre code source
 * (`serverIslandPlaceholderMap = "'$$server-islands-map$$'"`), ce qui casse le build
 * (« Unterminated string »). On renomme les marqueurs dans ce seul chunk.
 * Le manifeste virtuel n’a pas `serverIslandPlaceholderMap` : Astro le remplace normalement.
 *
 * @returns {import("vite").Plugin}
 */
function guardServerIslandPlaceholder() {
  return {
    name: "guard-server-island-placeholder",
    enforce: "pre",
    renderChunk(code) {
      if (
        !code.includes("serverIslandPlaceholderMap") ||
        !code.includes("$$server-islands-map$$")
      ) {
        return null;
      }
      return {
        code: code
          .replaceAll("$$server-islands-map$$", "$$server-islands-map-source$$")
          .replaceAll("$$server-islands-name-map$$", "$$server-islands-name-map-source$$"),
        map: null,
      };
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: client.seo.baseUrl,
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !NON_INDEXABLE_PATHS.some((path) => page.includes(path)),
    }),
    llmsMd(),
  ],
  env: {
    schema: {
      /** Clé Web3Forms du site intake (`/client-config/`). Absente → pas de bouton d’envoi. */
      PUBLIC_WEB3FORMS_ACCESS_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      /** `true` sur les sites démo / préprod / intake : meta robots noindex + robots.txt Disallow. */
      PUBLIC_NOINDEX: envField.boolean({ context: "client", access: "public", default: false }),
      /** Dépôt GitHub `owner/repo` pour Decap (prioritaire sur `src/data/cms.json` et le remote origin). */
      PUBLIC_GITHUB_REPO: envField.string({ context: "server", access: "public", optional: true }),
      /** Branche suivie par Decap (défaut : `cms.json` puis `main`). */
      PUBLIC_GITHUB_BRANCH: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      /** Proxy OAuth partagé pour Decap (sans slash final). Vide → Pages Functions `/api/auth` du site. */
      PUBLIC_DECAP_OAUTH_BASE_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
        url: true,
      }),
    },
  },
  fonts: siteFonts,
  vite: {
    plugins: [guardServerIslandPlaceholder(), tailwindcss()],
  },
});
