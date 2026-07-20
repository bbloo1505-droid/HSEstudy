"use client";

import { useEffect, useState } from "react";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { TRAINING_DISCLAIMER } from "@/lib/types";

type DashLite = {
  daysLeft: number;
  progressPct: number;
  dueCards: number;
  documentCount: number;
  todayLesson: { id: string; title: string; dayLabel: string } | null;
};

export function AppShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [dash, setDash] = useState<DashLite>({
    daysLeft: 0,
    progressPct: 0,
    dueCards: 0,
    documentCount: 0,
    todayLesson: null,
  });

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => {
        setDash({
          daysLeft: d.daysLeft ?? 0,
          progressPct: d.progressPct ?? 0,
          dueCards: d.dueCards ?? 0,
          documentCount: d.documentCount ?? 0,
          todayLesson: d.todayLesson
            ? {
                id: d.todayLesson.id,
                title: d.todayLesson.title,
                dayLabel: d.todayLesson.dayLabel,
              }
            : null,
        });
      })
      .catch(() => undefined);
  }, []);

  const lessonHref = `/lesson?id=${dash.todayLesson?.id ?? "w1-mon"}`;

  return (
    <div className="min-h-screen text-[var(--ink)]">
      <div className="mx-auto grid max-w-[1440px] gap-5 px-3 py-4 md:grid-cols-[260px_1fr] md:px-5 lg:px-6">
        <SidebarNav
          weekLabel={dash.todayLesson?.dayLabel ?? "Curriculum"}
          lessonTitle={dash.todayLesson?.title ?? "Open curriculum"}
          lessonHref={lessonHref}
          progressPct={dash.progressPct}
          dueCards={dash.dueCards}
        />

        <div className="min-w-0 space-y-5">
          <header className="card flex flex-wrap items-end justify-between gap-3 px-4 py-4 md:px-5">
            <div>
              <p className="text-xs text-[var(--muted)]">Personal study aid · Associate HSE prep</p>
              <h1 className="mt-1 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-[1.85rem]">
                {title ?? "HSE Launchpad"}
              </h1>
              <p className="mt-1 text-sm text-[var(--muted)]">
                On track for 10 August 2026 · {dash.daysLeft} days to mock project
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-ok">Consulting depth</span>
              <span className="badge">{dash.documentCount} sources</span>
              <span className="badge badge-warn">{dash.dueCards} flashcards due</span>
            </div>
          </header>

          <main className="space-y-5">{children}</main>

          <footer className="rounded-xl border border-[var(--line)] bg-[var(--panel)]/70 px-4 py-3 text-xs leading-relaxed text-[var(--muted)]">
            {TRAINING_DISCLAIMER} Documents stay in your local library. If you set OPENAI_API_KEY,
            Ask HSE prompts go to that cloud model.
          </footer>
        </div>
      </div>
    </div>
  );
}
