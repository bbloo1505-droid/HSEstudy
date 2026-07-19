import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { ScenarioTrainer } from "@/components/ScenarioTrainer";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/seed";

export const dynamic = "force-dynamic";

export default function ScenariosPage() {
  ensureSeeded();
  const scenarios = getDb()
    .prepare(
      `SELECT id, title, category, brief, tasks_json AS tasksJson, model_answer AS modelAnswer,
              source_notes AS sourceNotes, fictional_notice AS fictionalNotice
       FROM scenarios ORDER BY title`,
    )
    .all() as {
    id: string;
    title: string;
    category: string;
    brief: string;
    tasksJson: string;
    modelAnswer: string;
    sourceNotes: string;
    fictionalNotice: string;
  }[];

  return (
    <AppShell title="Fictional consulting jobs">
      <Panel title="Scenario simulator">
        <p className="text-sm text-[var(--muted)]">
          All businesses and sites are fictional. Compare your response to the model answer after you
          attempt the tasks. Model answers are learning aids — verify against official sources.
        </p>
      </Panel>
      {scenarios.map((s) => (
        <Panel key={s.id} eyebrow={s.category} title={s.title}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--warn)]">
            {s.fictionalNotice}
          </p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{s.brief}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {(JSON.parse(s.tasksJson) as string[]).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ScenarioTrainer
            scenarioId={s.id}
            modelAnswer={s.modelAnswer}
            sourceNotes={s.sourceNotes}
          />
        </Panel>
      ))}
    </AppShell>
  );
}
