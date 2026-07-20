import Link from "next/link";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { getDashboard } from "@/lib/progress";

export const dynamic = "force-dynamic";

const SESSION_STEPS = [
  { label: "Closed-book recall", mins: 15 },
  { label: "In-depth lesson study", mins: 50 },
  { label: "Official source reading", mins: 30 },
  { label: "Applied scenario + notes", mins: 30 },
  { label: "Quiz + flashcards", mins: 20 },
];

export default function DashboardPage() {
  const data = getDashboard();
  const lessonHref = `/lesson?id=${data.todayLesson?.id ?? "w1-mon"}`;

  return (
    <AppShell title="Good study session">
      <div className="rounded-xl border border-[var(--line)] bg-[var(--accent-dim)] px-4 py-3 text-sm text-[var(--accent)]">
        Consulting-depth mode — builds on your Cert I / site WHS experience toward Associate HSE
        judgement. Still escalate uncertainty; do not invent limits or section numbers.
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
        <Panel
          eyebrow="Today's plan"
          title={data.todayLesson?.title ?? "No lesson scheduled"}
          action={<span className="badge badge-violet">{data.todayLesson?.dayLabel}</span>}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs text-[var(--muted)]">
                {data.todayLesson?.dayDate} · ~2.5 hour weekday shape
              </p>
              <ul className="space-y-2">
                {SESSION_STEPS.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2.5 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-[var(--line-strong)] text-[10px] text-[var(--muted)]">
                        ○
                      </span>
                      {step.label}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{step.mins} min</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Today&apos;s focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#d7deea]">
                Open the daily lesson, learn the key words in plain English, then ask one Source-mode
                question against your imported Queensland documents.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                Why it matters: early trust comes from clear notes, honest limitations and asking
                when unsure — not from sounding expert.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={lessonHref}
                  className="rounded-xl bg-[var(--accent)] px-3.5 py-2 text-sm font-semibold text-[#062016]"
                >
                  Open lesson
                </Link>
                <Link
                  href="/consulting"
                  className="rounded-xl border border-[var(--line-strong)] px-3.5 py-2 text-sm"
                >
                  Consulting OS
                </Link>
              </div>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="Overall progress" title="Curriculum">
          <ProgressRing pct={data.progressPct} label="lessons done" />
          <div className="mt-2 space-y-2 text-xs text-[var(--muted)]">
            <div className="flex justify-between">
              <span>Completed</span>
              <span className="text-[var(--ink)]">
                {data.completedLessons}/{data.totalLessons}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Indexed sources</span>
              <span className="text-[var(--ink)]">{data.documentCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Days to mock project</span>
              <span className="text-[var(--amber)]">{data.daysLeft}</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
            <span className="badge">Not introduced</span>
            <span className="badge badge-warn">Learning</span>
            <span className="badge badge-violet">Can explain</span>
            <span className="badge badge-ok">Can apply / ready</span>
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Continue">
          <p className="text-xs text-[var(--muted)]">Nearest lesson</p>
          <p className="mt-1 font-medium">{data.todayLesson?.title}</p>
          <div className="progress-track mt-3">
            <div
              className="progress-fill"
              style={{
                width: `${data.progressPct || 4}%`,
              }}
            />
          </div>
          <Link href={lessonHref} className="mt-4 inline-block text-sm text-[var(--accent)]">
            Resume →
          </Link>
        </Panel>

        <Panel title="Upcoming">
          <ul className="space-y-2 text-sm">
            {data.upcoming.length === 0 ? (
              <li className="text-[var(--muted)]">No upcoming lessons listed.</li>
            ) : (
              data.upcoming.map((u) => (
                <li key={u.id} className="border-b border-[var(--line)] pb-2 last:border-0">
                  <p className="text-[11px] text-[var(--muted)]">{u.dayLabel}</p>
                  <Link href={`/lesson?id=${u.id}`} className="hover:text-[var(--accent)]">
                    {u.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Panel>

        <Panel title="Weak areas">
          {data.weakAreas.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">
              No quiz misses yet. After a few quizzes, gaps will appear here.
            </p>
          ) : (
            <ul className="space-y-2 text-sm">
              {data.weakAreas.map((w) => (
                <li key={w.topicId} className="flex items-center justify-between gap-2">
                  <span>{w.label}</span>
                  <span className="badge badge-warn">{w.misses} misses</span>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/quiz"
            className="mt-4 inline-flex rounded-xl border border-[var(--line-strong)] px-3 py-2 text-xs font-semibold"
          >
            Study weak areas
          </Link>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel eyebrow="Mastery" title="Topic confidence">
          <div className="space-y-3">
            {data.topics.map((t) => (
              <div key={t.id}>
                <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                  <span>{t.label}</span>
                  <span className="text-xs text-[var(--muted)]">{t.confidenceLabel}</span>
                </div>
                <div className="progress-track">
                  <div
                    className={
                      t.level >= 3
                        ? "progress-fill"
                        : t.level === 2
                          ? "progress-fill-violet"
                          : "progress-fill-amber"
                    }
                    style={{ width: `${Math.max(6, (t.level / 4) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Ask HSE" title="Source-grounded questions">
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Ask in Source mode for page-level citations from your imported Act, Regulation and codes.
            If nothing is retrieved, the app will say it cannot verify.
          </p>
          <div className="mt-4 rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-3 text-xs text-[var(--muted)]">
            Example: “What is the difference between a regulation and a code of practice?”
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/ask"
              className="rounded-xl bg-[var(--violet)] px-3.5 py-2 text-sm font-semibold text-white"
            >
              Open Ask HSE
            </Link>
            <Link
              href="/library"
              className="rounded-xl border border-[var(--line-strong)] px-3.5 py-2 text-sm"
            >
              Source library
            </Link>
          </div>
          <p className="mt-3 text-[11px] text-[var(--muted)]">
            Source mode · citations required · set OPENAI_API_KEY in .env.local for clearer answers
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
