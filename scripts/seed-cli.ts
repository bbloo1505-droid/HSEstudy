import { ensureSeeded } from "../src/lib/seed";
import { getDashboard } from "../src/lib/progress";

ensureSeeded();
const dash = getDashboard();
console.log(
  JSON.stringify(
    {
      lessons: dash.totalLessons,
      documents: dash.documentCount,
      todayLesson: dash.todayLesson,
    },
    null,
    2,
  ),
);
