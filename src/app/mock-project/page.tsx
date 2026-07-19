import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { MockChecklist } from "@/components/MockChecklist";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/seed";

export const dynamic = "force-dynamic";

export default function MockProjectPage() {
  ensureSeeded();
  const project = getDb()
    .prepare(
      `SELECT id, title, brief, checklist_json AS checklistJson, due_date AS dueDate FROM mock_projects LIMIT 1`,
    )
    .get() as {
    id: string;
    title: string;
    brief: string;
    checklistJson: string;
    dueDate: string;
  };

  const progress = getDb()
    .prepare(
      `SELECT checklist_state_json AS stateJson, notes_json AS notesJson FROM mock_project_progress WHERE project_id = ?`,
    )
    .get(project.id) as { stateJson: string; notesJson: string };

  return (
    <AppShell title="Final assessment">
      <Panel eyebrow={`Due ${project.dueDate}`} title={project.title}>
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{project.brief}</p>
      </Panel>
      <Panel title="Checklist">
        <MockChecklist
          projectId={project.id}
          items={JSON.parse(project.checklistJson) as string[]}
          initialState={JSON.parse(progress.stateJson) as Record<string, boolean>}
          initialNotes={JSON.parse(progress.notesJson) as Record<string, string>}
        />
      </Panel>
    </AppShell>
  );
}
