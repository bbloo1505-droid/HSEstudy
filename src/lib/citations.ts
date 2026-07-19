import type { DocumentType, SourceAnswer } from "./types";

const LEGISLATIVE_TYPES: DocumentType[] = ["legislation", "regulation"];
const GUIDANCE_TYPES: DocumentType[] = [
  "approved_code_of_practice",
  "regulator_guidance",
  "australian_standard",
  "company_procedure",
  "general_explanatory",
];

export function isLegislation(type: DocumentType): boolean {
  return LEGISLATIVE_TYPES.includes(type);
}

export function isGuidance(type: DocumentType): boolean {
  return GUIDANCE_TYPES.includes(type);
}

export function assertNotGuidanceAsLegislation(type: DocumentType, text: string): string[] {
  const errors: string[] = [];
  const lower = text.toLowerCase();
  if (isGuidance(type)) {
    if (/\b(the )?(act|regulation) (requires|mandates|makes it an offence)\b/i.test(text)) {
      // soft check — codes often say "should"; flag hard legal language without caveat
      if (!/code of practice|guidance|may assist|practical guidance/i.test(text)) {
        errors.push("Guidance document language may be overstating legal force.");
      }
    }
    if (lower.includes("this is legislation") || lower.includes("this is the act")) {
      errors.push("Must not present guidance as legislation.");
    }
  }
  return errors;
}

export function unverifiedAnswer(question: string): SourceAnswer {
  return {
    directAnswer:
      "This answer is not verified against an imported official source in the local library.",
    plainEnglish: `No supporting excerpt was retrieved for: “${question.trim()}”. Import the relevant official document and try Source mode again, or use Study mode for a learning explanation that is clearly marked as uncited.`,
    officialSourceTitle: "—",
    pageOrSection: "—",
    jurisdiction: "—",
    documentStatus: "—",
    documentType: "general_explanatory",
    consultantRelevance:
      "Do not rely on an unverified answer for fieldwork, reports, or client advice. Locate the current Queensland requirement with your supervisor.",
    uncertainty: "No citation available.",
    confidence: "unverified",
    verified: false,
  };
}

export function buildSourceAnswer(input: {
  directAnswer: string;
  plainEnglish: string;
  title: string;
  pageOrSection: string;
  jurisdiction: string;
  documentStatus: string;
  documentType: DocumentType;
  consultantRelevance: string;
  uncertainty: string;
  excerpt: string;
  confidence: "high" | "medium" | "low";
}): SourceAnswer {
  if (!input.excerpt.trim() || !input.title.trim() || input.pageOrSection === "—") {
    return unverifiedAnswer(input.directAnswer);
  }
  return {
    directAnswer: input.directAnswer,
    plainEnglish: input.plainEnglish,
    officialSourceTitle: input.title,
    pageOrSection: input.pageOrSection,
    jurisdiction: input.jurisdiction,
    documentStatus: input.documentStatus,
    documentType: input.documentType,
    consultantRelevance: input.consultantRelevance,
    uncertainty: input.uncertainty,
    excerpt: input.excerpt,
    confidence: input.confidence,
    verified: true,
  };
}

/** Source-mode answers must never be marked verified without a real excerpt + locator. */
export function validateSourceModeAnswer(answer: SourceAnswer): {
  ok: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  if (answer.verified) {
    if (!answer.excerpt?.trim()) errors.push("Verified answers require an excerpt.");
    if (!answer.officialSourceTitle || answer.officialSourceTitle === "—") {
      errors.push("Verified answers require an official source title.");
    }
    if (!answer.pageOrSection || answer.pageOrSection === "—") {
      errors.push("Verified answers require a page or section locator.");
    }
    if (answer.confidence === "unverified") {
      errors.push("Verified flag conflicts with unverified confidence.");
    }
    errors.push(...assertNotGuidanceAsLegislation(answer.documentType, answer.directAnswer));
  }
  return { ok: errors.length === 0, errors };
}
