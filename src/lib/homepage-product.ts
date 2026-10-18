export const trialUrl = "https://radinacev1.netlify.app";
export const checkerUrl: string | undefined = undefined;
export const trialDays = 14;
export const homepagePlans = [
  { name: "Basic", monthlyPrice: 4650, locations: 1 },
  { name: "Standard", monthlyPrice: 6950, locations: 5 },
] as const;
export const supportedPlatforms = ["Google Business Profile"] as const;
export function canAutoReply(stars: number, autoReplyEnabled = false) {
  return autoReplyEnabled && (stars === 4 || stars === 5);
}