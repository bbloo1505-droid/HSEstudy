import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { CopyPromptButton } from "@/components/CopyPromptButton";
import { Panel } from "@/components/ui/Panel";
import {
  buildNotebookPrompt,
  NOTEBOOKLM_SETUP,
  nextEpisode,
  PODCAST_EPISODES,
} from "../../../content/notebooklm-podcasts";
import { todayIso } from "@/lib/srs";

export const dynamic = "force-dynamic";

export default function PodcastsPage() {
  const today = todayIso();
  const upcoming = nextEpisode(today) ?? PODCAST_EPISODES[0];

  return (
    <AppShell title="NotebookLM study podcasts">
      <Panel eyebrow="Setup" title="How to generate each episode">
        <ol className="list-decimal space-y-2 pl-5 text-sm text-[#d7deea]">
          <li>
            In NotebookLM choose <strong>{NOTEBOOKLM_SETUP.format}</strong>, length{" "}
            <strong>{NOTEBOOKLM_SETUP.length}</strong>, language{" "}
            <strong>{NOTEBOOKLM_SETUP.language}</strong>.
          </li>
          <li>Select only the sources listed for that episode (not your whole library).</li>
          <li>Paste the copied focus prompt into “What should the AI hosts focus on…”.</li>
          <li>Generate, then listen while following the matching HSE Launchpad daily lesson.</li>
        </ol>
        <p className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--muted)]">
          {NOTEBOOKLM_SETUP.tip}
        </p>
      </Panel>

      <Panel
        eyebrow="Next up"
        title={upcoming.title}
        action={<span className="badge badge-violet">{upcoming.dayLabel}</span>}
      >
        <p className="text-sm text-[var(--muted)]">{upcoming.date}</p>
        <p className="mt-2 text-sm text-[#d7deea]">{upcoming.focus}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          {upcoming.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyPromptButton text={buildNotebookPrompt(upcoming)} />
          {upcoming.launchpadLessonId ? (
            <Link
              href={`/lesson?id=${upcoming.launchpadLessonId}`}
              className="rounded-xl border border-[var(--line-strong)] px-3.5 py-2 text-sm"
            >
              Open matching lesson
            </Link>
          ) : null}
        </div>
      </Panel>

      {[1, 2, 3].map((week) => (
        <Panel key={week} eyebrow={`Week ${week}`} title={`Week ${week} podcast checklist`}>
          <div className="space-y-4">
            {PODCAST_EPISODES.filter((e) => e.week === week).map((episode) => {
              const isToday = episode.date === today;
              const prompt = buildNotebookPrompt(episode);
              return (
                <article
                  key={episode.date}
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {episode.dayLabel} · {episode.date}
                        {isToday ? " · today" : ""}
                      </p>
                      <h3 className="mt-1 font-semibold">{episode.title}</h3>
                    </div>
                    {isToday ? <span className="badge badge-ok">Today</span> : null}
                  </div>
                  <p className="mt-2 text-sm text-[#d7deea]">{episode.focus}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    Sources
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-[var(--muted)]">
                    {episode.sources.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm text-[var(--accent)]">
                      Preview full prompt
                    </summary>
                    <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 text-xs text-[var(--muted)]">
                      {prompt}
                    </pre>
                  </details>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <CopyPromptButton text={prompt} />
                    {episode.launchpadLessonId ? (
                      <Link
                        href={`/lesson?id=${episode.launchpadLessonId}`}
                        className="rounded-xl border border-[var(--line-strong)] px-3.5 py-2 text-sm"
                      >
                        Lesson
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </Panel>
      ))}
    </AppShell>
  );
}
