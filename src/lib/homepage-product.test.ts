import { describe, expect, test } from "bun:test";
import { canAutoReply, homepagePlans, supportedPlatforms, trialDays, trialUrl } from "./homepage-product";

describe("Homepage product rules", () => {
  test("Basic costs KES 4,650 monthly", () => expect(homepagePlans[0].monthlyPrice).toBe(4650));
  test("Basic supports one location", () => expect(homepagePlans[0].locations).toBe(1));
  test("Standard costs KES 6,950 monthly", () => expect(homepagePlans[1].monthlyPrice).toBe(6950));
  test("Standard supports five locations", () => expect(homepagePlans[1].locations).toBe(5));
  test("trial lasts 14 days", () => expect(trialDays).toBe(14));
  test("trial opens the supplied dashboard", () => expect(trialUrl).toBe("https://radinacev1.netlify.app"));
  test("only Google Business Profile is supported", () => expect(supportedPlatforms).toEqual(["Google Business Profile"]));
  test("approval is required by default", () => expect(canAutoReply(5)).toBe(false));
  test("enabled auto-reply supports only four and five stars", () => {
    expect(canAutoReply(4, true)).toBe(true);
    expect(canAutoReply(5, true)).toBe(true);
    expect(canAutoReply(6, true)).toBe(false);
  });
  test("low-star reviews are never auto-replied", () => {
    for (const stars of [1, 2, 3]) expect(canAutoReply(stars, true)).toBe(false);
  });
});