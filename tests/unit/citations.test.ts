import { describe, expect, it } from "vitest";
import {
  assertNotGuidanceAsLegislation,
  buildSourceAnswer,
  isGuidance,
  isLegislation,
  unverifiedAnswer,
  validateSourceModeAnswer,
} from "@/lib/citations";

describe("citation validator", () => {
  it("distinguishes legislation from guidance", () => {
    expect(isLegislation("legislation")).toBe(true);
    expect(isLegislation("regulation")).toBe(true);
    expect(isGuidance("approved_code_of_practice")).toBe(true);
    expect(isLegislation("approved_code_of_practice")).toBe(false);
  });

  it("rejects verified answers without excerpt or locator", () => {
    const bad = {
      ...unverifiedAnswer("test"),
      verified: true,
      confidence: "high" as const,
      officialSourceTitle: "Some Code",
      pageOrSection: "—",
    };
    const result = validateSourceModeAnswer(bad);
    expect(result.ok).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it("accepts verified answers with excerpt and locator", () => {
    const good = buildSourceAnswer({
      directAnswer: "A register records hazardous chemicals used at the workplace.",
      plainEnglish: "Keep the list current and linked to SDSs.",
      title: "Study primer: Hazardous chemicals essentials (Queensland)",
      pageOrSection: "chem-3",
      jurisdiction: "Queensland",
      documentStatus: "current",
      documentType: "general_explanatory",
      consultantRelevance: "Use when reviewing client registers under supervision.",
      uncertainty: "Primer only — confirm in official code.",
      excerpt: "A hazardous chemical register is a list of hazardous chemicals...",
      confidence: "medium",
    });
    expect(good.verified).toBe(true);
    expect(validateSourceModeAnswer(good).ok).toBe(true);
  });

  it("flags presenting guidance as the Act", () => {
    const errors = assertNotGuidanceAsLegislation(
      "approved_code_of_practice",
      "This is legislation and must be followed as the Act.",
    );
    expect(errors.length).toBeGreaterThan(0);
  });

  it("source mode returns unverified when no support", () => {
    const a = unverifiedAnswer("Invented limit?");
    expect(a.verified).toBe(false);
    expect(a.confidence).toBe("unverified");
  });
});
