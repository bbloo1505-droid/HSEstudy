import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "hse-launchpad.db");

let dbInstance: Database.Database | null = null;

export function getDb(): Database.Database {
  if (dbInstance) return dbInstance;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  migrate(db);
  dbInstance = db;
  return db;
}

function migrate(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS topics (
      id TEXT PRIMARY KEY,
      label TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS topic_progress (
      topic_id TEXT PRIMARY KEY REFERENCES topics(id),
      confidence TEXT NOT NULL DEFAULT 'not_introduced',
      notes TEXT DEFAULT '',
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lessons (
      id TEXT PRIMARY KEY,
      day_date TEXT NOT NULL UNIQUE,
      week INTEGER NOT NULL,
      day_label TEXT NOT NULL,
      title TEXT NOT NULL,
      topic_ids TEXT NOT NULL,
      objectives_json TEXT NOT NULL,
      explanation TEXT NOT NULL,
      terminology_json TEXT NOT NULL,
      official_readings_json TEXT NOT NULL,
      consulting_relevance TEXT NOT NULL,
      worked_example TEXT NOT NULL,
      scenario_prompt TEXT NOT NULL,
      scenario_model TEXT NOT NULL,
      common_mistakes_json TEXT NOT NULL,
      summary TEXT NOT NULL,
      session_plan TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lesson_completions (
      lesson_id TEXT PRIMARY KEY REFERENCES lessons(id),
      confidence TEXT NOT NULL,
      completed_at TEXT NOT NULL,
      notes TEXT DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS quiz_questions (
      id TEXT PRIMARY KEY,
      lesson_id TEXT REFERENCES lessons(id),
      topic_id TEXT NOT NULL,
      prompt TEXT NOT NULL,
      choices_json TEXT NOT NULL,
      correct_index INTEGER NOT NULL,
      explanation TEXT NOT NULL,
      source_hint TEXT DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS quiz_stats (
      question_id TEXT PRIMARY KEY REFERENCES quiz_questions(id),
      correct_count INTEGER NOT NULL DEFAULT 0,
      incorrect_count INTEGER NOT NULL DEFAULT 0,
      last_incorrect_at TEXT,
      last_seen_at TEXT
    );

    CREATE TABLE IF NOT EXISTS flashcards (
      id TEXT PRIMARY KEY,
      topic_id TEXT NOT NULL,
      front TEXT NOT NULL,
      back TEXT NOT NULL,
      source_question_id TEXT,
      ease REAL NOT NULL DEFAULT 2.5,
      interval_days INTEGER NOT NULL DEFAULT 0,
      repetitions INTEGER NOT NULL DEFAULT 0,
      lapses INTEGER NOT NULL DEFAULT 0,
      due_at TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      jurisdiction TEXT NOT NULL,
      regulator TEXT NOT NULL,
      document_type TEXT NOT NULL,
      publication_date TEXT,
      publication_year INTEGER,
      effective_date TEXT,
      version TEXT,
      current_status TEXT NOT NULL,
      original_source_reference TEXT NOT NULL,
      topics_json TEXT NOT NULL,
      reviewed_at TEXT NOT NULL,
      filename TEXT NOT NULL,
      imported_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS document_chunks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      document_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
      chunk_index INTEGER NOT NULL,
      section_label TEXT DEFAULT '',
      page_hint TEXT DEFAULT '',
      content TEXT NOT NULL
    );

    CREATE VIRTUAL TABLE IF NOT EXISTS document_fts USING fts5(
      content,
      section_label,
      document_id UNINDEXED,
      chunk_id UNINDEXED,
      tokenize = 'porter'
    );

    CREATE TABLE IF NOT EXISTS scenarios (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      brief TEXT NOT NULL,
      tasks_json TEXT NOT NULL,
      model_answer TEXT NOT NULL,
      source_notes TEXT NOT NULL,
      fictional_notice TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS scenario_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      scenario_id TEXT NOT NULL REFERENCES scenarios(id),
      response TEXT NOT NULL,
      reflection TEXT DEFAULT '',
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS mock_projects (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      brief TEXT NOT NULL,
      checklist_json TEXT NOT NULL,
      due_date TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS mock_project_progress (
      project_id TEXT PRIMARY KEY REFERENCES mock_projects(id),
      checklist_state_json TEXT NOT NULL,
      notes_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ask_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mode TEXT NOT NULL,
      question TEXT NOT NULL,
      answer_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
}

export function resetDbForTests() {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
  if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);
}
