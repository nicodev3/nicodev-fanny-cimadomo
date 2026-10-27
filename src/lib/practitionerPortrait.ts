import portrait from "../assets/fanny-cimadomo-psychologue.jpeg";

export const practitionerPortrait = portrait;

export function practitionerPortraitAlt(fullName: string, title: string): string {
  return `${fullName}, ${title.toLowerCase()}`;
}
