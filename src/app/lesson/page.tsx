import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { LessonActions } from "@/components/LessonActions";
import { LessonQuiz } from "@/components/LessonQuiz";
import { getDashboard, getLesson } from "@/lib/progress";

export const dynamic = "force-dynamic";

export default async function LessonPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const dash = getDashboard();
  const id = params.id || (dash.todayLesson?.id as string) || "w1-mon";
  const lesson = getLesson(id);

  if (!lesson) {
    return (
      <AppShell title="Daily lesson">
        <Panel title="Lesson not found">
          <p className="text-sm text-[var(--muted)]">Check the curriculum list.</p>
        </Panel>
      </AppShell>
    );
  }

  return (
    <AppShell title={lesson.dayLabel}>
      <Panel eyebrow="Daily lesson" title={lesson.title}>
        <p className="text-sm text-[var(--muted)]">{lesson.dayDate}</p>
        <div className="prose-study mt-4 space-y-3 text-sm">
          <h3>Learning objectives</h3>
          <ul>
            {lesson.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <h3>Session plan</h3>
          <p className="whitespace-pre-wrap">{lesson.sessionPlan}</p>
        </div>
      </Panel>

      <Panel
        eyebrow="Study depth"
        title="In-depth explanation"
      >
        <p className="mb-3 text-xs text-[var(--muted)]">
          Builds from Cert I / site WHS experience toward Associate HSE consulting judgement —
          not a zero-knowledge skim.
        </p>
        <div className="prose-study whitespace-pre-wrap text-sm leading-relaxed">
          {lesson.explanation}
        </div>
      </Panel>

      <Panel title="Terminology">
        <dl className="space-y-3 text-sm">
          {lesson.terminology.map((t) => (
            <div key={t.term} className="border-b border-[var(--line)] pb-3">
              <dt className="font-semibold">{t.term}</dt>
              <dd className="mt-1 text-[var(--muted)]">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <Panel title="Official readings">
        <ul className="space-y-2 text-sm">
          {lesson.officialReadings.map((r) => (
            <li key={r.title} className="border border-[var(--line)] px-3 py-2">
              <p className="font-medium">{r.title}</p>
              <p className="text-[var(--muted)]">{r.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-[var(--muted)]">
          Readings point to document titles only. Verify section wording in your imported official
          sources.
        </p>
      </Panel>

      <Panel title="Consulting relevance">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{lesson.consultingRelevance}</p>
      </Panel>

      <Panel title="Worked example">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{lesson.workedExample}</p>
      </Panel>

      <Panel title="Common consultant mistakes">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {lesson.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </Panel>

      <Panel title="Scenario">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{lesson.scenarioPrompt}</p>
        <details className="mt-4 border border-[var(--line)] px-3 py-2 text-sm">
          <summary className="cursor-pointer font-medium">Model answer (reveal after you attempt)</summary>
          <p className="mt-3 whitespace-pre-wrap text-[var(--muted)]">{lesson.scenarioModel}</p>
        </details>
      </Panel>

      <Panel title="Ten-question quiz">
        <LessonQuiz lessonId={lesson.id} />
      </Panel>

      <Panel title="Summary">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{lesson.summary}</p>
      </Panel>

      <Panel title="Confidence rating">
        <LessonActions
          lessonId={lesson.id}
          initialConfidence={lesson.completion?.confidence}
          initialNotes={lesson.completion?.notes}
        />
      </Panel>
    </AppShell>
  );
}
