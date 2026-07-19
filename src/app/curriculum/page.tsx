import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { listLessons } from "@/lib/progress";
import { todayIso } from "@/lib/srs";

export const dynamic = "force-dynamic";

export default function CurriculumPage() {
  const lessons = listLessons();
  const today = todayIso();
  const weeks = [1, 2, 3] as const;

  return (
    <AppShell title="Three-week guided curriculum">
      {weeks.map((week) => (
        <Panel key={week} eyebrow={`Week ${week}`} title={`Week ${week} lessons`}>
          <ul className="divide-y divide-[var(--line)]">
            {lessons
              .filter((l) => l.week === week)
              .map((l) => (
                <li key={l.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                      {l.dayLabel} · {l.dayDate}
                      {l.dayDate === today ? " · today" : ""}
                    </p>
                    <p className="font-medium">{l.title}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {l.completed ? <span className="badge">Done</span> : null}
                    <Link
                      href={`/lesson?id=${l.id}`}
                      className="border border-[var(--line)] px-3 py-1.5 text-sm"
                    >
                      Open
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </Panel>
      ))}
    </AppShell>
  );
}
