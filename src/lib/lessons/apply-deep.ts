import type { LessonSeed } from "../seed-data";
import { DEEP_DIVE_BLOCKS } from "./deep-dive-blocks";
import { DEPTH_SUPPLEMENTS } from "./depth-supplements";
import type { DeepLessonPatch } from "./types";
import { WEEK1_DEEP } from "./week1-deep";
import { WEEK2_DEEP } from "./week2-deep";
import { WEEK3_DEEP } from "./week3-deep";

const DEEP: Record<string, DeepLessonPatch> = {
  ...WEEK1_DEEP,
  ...WEEK2_DEEP,
  ...WEEK3_DEEP,
};

function fullExplanation(id: string, base: string): string {
  const supplement = DEPTH_SUPPLEMENTS[id] ?? "";
  const dive = DEEP_DIVE_BLOCKS[id] ?? "";
  return `${base}${supplement}${dive}`;
}

export function applyDeepLessons(lessons: LessonSeed[]): LessonSeed[] {
  return lessons.map((lesson) => {
    const patch = DEEP[lesson.id];
    if (!patch) {
      return {
        ...lesson,
        explanation: fullExplanation(lesson.id, lesson.explanation),
      };
    }
    return {
      ...lesson,
      objectives: patch.objectives ?? lesson.objectives,
      explanation: fullExplanation(lesson.id, patch.explanation),
      terminology: patch.terminology ?? lesson.terminology,
      consultingRelevance: patch.consultingRelevance ?? lesson.consultingRelevance,
      workedExample: patch.workedExample ?? lesson.workedExample,
      scenarioModel: patch.scenarioModel ?? lesson.scenarioModel,
      commonMistakes: patch.commonMistakes ?? lesson.commonMistakes,
      summary: patch.summary ?? lesson.summary,
      sessionPlan: patch.sessionPlan ?? lesson.sessionPlan,
    };
  });
}
