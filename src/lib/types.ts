import { z } from "zod";

export const ConfidenceLevel = z.enum([
  "not_introduced",
  "learning",
  "can_explain",
  "can_apply",
  "ready_supervised",
]);
export type ConfidenceLevel = z.infer<typeof ConfidenceLevel>;

export const DocumentType = z.enum([
  "legislation",
  "regulation",
  "approved_code_of_practice",
  "australian_standard",
  "regulator_guidance",
  "company_procedure",
  "general_explanatory",
]);
export type DocumentType = z.infer<typeof DocumentType>;

export const DocumentStatus = z.enum(["current", "superseded", "pending"]);
export type DocumentStatus = z.infer<typeof DocumentStatus>;

export const AnswerMode = z.enum(["study", "source"]);
export type AnswerMode = z.infer<typeof AnswerMode>;

export const DocumentMetaSchema = z.object({
  title: z.string(),
  jurisdiction: z.string(),
  regulator: z.string(),
  documentType: DocumentType,
  publicationDate: z.string().optional(),
  publicationYear: z.number().optional(),
  effectiveDate: z.string().optional(),
  version: z.string().optional(),
  currentStatus: DocumentStatus,
  originalSourceReference: z.string(),
  topics: z.array(z.string()),
  reviewedAt: z.string(),
  filename: z.string(),
});
export type DocumentMeta = z.infer<typeof DocumentMetaSchema>;

export const SourceAnswerSchema = z.object({
  directAnswer: z.string(),
  plainEnglish: z.string(),
  officialSourceTitle: z.string(),
  pageOrSection: z.string(),
  jurisdiction: z.string(),
  documentStatus: z.string(),
  documentType: DocumentType,
  consultantRelevance: z.string(),
  uncertainty: z.string(),
  confidence: z.enum(["high", "medium", "low", "unverified"]),
  verified: z.boolean(),
  excerpt: z.string().optional(),
});
export type SourceAnswer = z.infer<typeof SourceAnswerSchema>;

export type TopicId =
  | "whs_legal_framework"
  | "risk_management"
  | "hazardous_chemicals"
  | "asbestos"
  | "other_hazmat"
  | "occupational_hygiene"
  | "air_monitoring"
  | "noise"
  | "silica"
  | "health_monitoring"
  | "fieldwork"
  | "reporting"
  | "consulting_practice";

export const TOPIC_LABELS: Record<TopicId, string> = {
  whs_legal_framework: "WHS legal framework",
  risk_management: "Risk management",
  hazardous_chemicals: "Hazardous chemicals",
  asbestos: "Asbestos",
  other_hazmat: "Other hazardous building materials",
  occupational_hygiene: "Occupational hygiene",
  air_monitoring: "Air monitoring",
  noise: "Noise",
  silica: "Silica",
  health_monitoring: "Health monitoring",
  fieldwork: "Fieldwork",
  reporting: "Reporting",
  consulting_practice: "Consulting practice",
};

export const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  not_introduced: "Not introduced",
  learning: "Learning",
  can_explain: "Can explain",
  can_apply: "Can apply",
  ready_supervised: "Ready for supervised work",
};

export const TRAINING_DISCLAIMER =
  "Training aid — verify against current legislation, approved procedures and supervisor guidance.";

/** Curriculum end date (final mock project Sunday). */
export const CURRICULUM_END = "2026-08-09";
/** First weekday lesson. */
export const CURRICULUM_START = "2026-07-20";
