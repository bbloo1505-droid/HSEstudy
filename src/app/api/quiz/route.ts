import { NextResponse } from "next/server";
import { getQuizForLesson, getWeightedQuiz } from "@/lib/progress";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const lessonId = url.searchParams.get("lessonId");
  const topicId = url.searchParams.get("topicId") ?? undefined;
  const limit = Number(url.searchParams.get("limit") ?? (lessonId ? 10 : 20));

  const questions = lessonId
    ? getQuizForLesson(lessonId, limit)
    : getWeightedQuiz(limit, topicId);

  // Hide correctIndex from client until answered — actually LessonQuiz checks via API.
  // For UX we still need choices; correctIndex is validated server-side on answer.
  const safe = questions.map(({ correctIndex: _c, ...q }) => q);
  return NextResponse.json({ questions: safe });
}
