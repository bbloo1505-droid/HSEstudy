import {
  getPrepSessionForDate,
  LEARNER_PROFILE,
  nextPrepSession,
  THREE_PRIORITIES,
} from "../content/consulting-os";
import { CURRICULUM_END } from "../src/lib/types";

function todayIso(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function isWeekday(iso: string): boolean {
  const day = new Date(`${iso}T12:00:00`).getDay();
  return day >= 1 && day <= 5;
}

const START_DATE = "2026-08-10";

const today = todayIso();
const ended = today > START_DATE;

let session = getPrepSessionForDate(today);
let note = "today";

if (!session) {
  session = nextPrepSession(today);
  note = session ? `next weekday session (${session.date})` : "none remaining";
}

const weekday = isWeekday(today);

console.log(
  JSON.stringify(
    {
      ended,
      today,
      isWeekday: weekday,
      roleStart: START_DATE,
      curriculumEnd: CURRICULUM_END,
      sessionNote: note,
      learner: LEARNER_PROFILE,
      session,
      priorities: THREE_PRIORITIES.map((p) => p.title),
      appPages: ["/consulting", "/lesson", "/ask", "/scenarios"],
    },
    null,
    2,
  ),
);
