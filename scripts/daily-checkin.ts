import { getDashboard, getLesson } from "../src/lib/progress";
import { ensureSeeded } from "../src/lib/seed";
import { CURRICULUM_END } from "../src/lib/types";

ensureSeeded();
const d = getDashboard();
const lesson = d.todayLesson ? getLesson(d.todayLesson.id) : null;

const ended = d.today > CURRICULUM_END;

console.log(
  JSON.stringify(
    {
      ended,
      today: d.today,
      daysLeft: d.daysLeft,
      curriculumEnd: CURRICULUM_END,
      completedLessons: d.completedLessons,
      totalLessons: d.totalLessons,
      dueCards: d.dueCards,
      weakAreas: d.weakAreas,
      lesson: lesson
        ? {
            id: lesson.id,
            title: lesson.title,
            dayLabel: lesson.dayLabel,
            dayDate: lesson.dayDate,
            objectives: lesson.objectives,
            sessionPlan: lesson.sessionPlan,
            readings: lesson.officialReadings,
            summary: lesson.summary,
          }
        : null,
    },
    null,
    2,
  ),
);
