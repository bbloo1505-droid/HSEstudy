export interface DeepLessonPatch {
  objectives?: string[];
  explanation: string;
  terminology?: { term: string; definition: string }[];
  consultingRelevance?: string;
  workedExample?: string;
  scenarioModel?: string;
  commonMistakes?: string[];
  summary?: string;
  sessionPlan?: string;
}
