import fs from "fs";
import path from "path";
import { DatabaseSync, type StatementSync } from "node:sqlite";

/**
 * Thin better-sqlite3-compatible wrapper over Node's built-in sqlite.
 * Works on Vercel (in-memory) without native addons.
 */

export type RunResult = {
  lastInsertRowid: number | bigint;
  changes: number | bigint;
};

export type Statement = {
  get: (...params: unknown[]) => unknown;
  all: (...params: unknown[]) => unknown[];
  run: (...params: unknown[]) => RunResult;
};

export type AppDatabase = {
  prepare: (sql: string) => Statement;
  exec: (sql: string) => void;
  pragma: (source: string) => void;
  transaction: <Args extends unknown[], R>(
    fn: (...args: Args) => R,
  ) => (...args: Args) => R;
  close: () => void;
};

const isServerless =
  process.env.VERCEL === "1" || Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

const isTest = process.env.VITEST === "true" || process.env.NODE_ENV === "test";

const DATA_DIR = isServerless
  ? path.join("/tmp", "hse-launchpad")
  : path.join(process.cwd(), "data");

const DB_PATH =
  isServerless || isTest ? ":memory:" : path.join(DATA_DIR, "hse-launchpad.db");

let dbInstance: AppDatabase | null = null;

function toNodeSql(sql: string): string {
  // better-sqlite3 @name → node:sqlite $name
  return sql.replace(/@([A-Za-z_][A-Za-z0-9_]*)/g, "$$$1");
}

function bindParams(sql: string, params: unknown[]): unknown[] {
  if (
    params.length === 1 &&
    params[0] !== null &&
    typeof params[0] === "object" &&
    !Array.isArray(params[0])
  ) {
    const obj = params[0] as Record<string, unknown>;
    const names = [...sql.matchAll(/\$([A-Za-z_][A-Za-z0-9_]*)/g)].map((m) => m[1]);
    const unique = [...new Set(names)];
    if (unique.length > 0) {
      const mapped: Record<string, unknown> = {};
      for (const name of unique) {
        mapped[`$${name}`] =
          obj[name] ?? obj[`@${name}`] ?? obj[`$${name}`] ?? obj[`:${name}`] ?? null;
      }
      return [mapped];
    }
  }
  return params;
}

function wrapStatement(stmt: StatementSync, sql: string): Statement {
  return {
    get: (...params: unknown[]) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (stmt.get as any)(...bindParams(sql, params)),
    all: (...params: unknown[]) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (stmt.all as any)(...bindParams(sql, params)) as unknown[],
    run: (...params: unknown[]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = (stmt.run as any)(...bindParams(sql, params));
      return {
        lastInsertRowid: result.lastInsertRowid,
        changes: result.changes,
      };
    },
  };
}

function wrapDatabase(db: DatabaseSync): AppDatabase {
  return {
    prepare(sql: string) {
      const converted = toNodeSql(sql);
      return wrapStatement(db.prepare(converted), converted);
    },
    exec(sql: string) {
      db.exec(sql);
    },
    pragma(source: string) {
      // better-sqlite3: db.pragma('journal_mode = WAL')
      db.exec(`PRAGMA ${source}`);
    },
    transaction<Args extends unknown[], R>(fn: (...args: Args) => R) {
      return (...args: Args) => {
        db.exec("BEGIN");
        try {
          const value = fn(...args);
          db.exec("COMMIT");
          return value;
        } catch (error) {
          db.exec("ROLLBACK");
          throw error;
        }
      };
    },
    close() {
      db.close();
    },
  };
}

export function getDb(): AppDatabase {
  if (dbInstance) return dbInstance;
  if (!isServerless && !fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const db = new DatabaseSync(DB_PATH);
  const appDb = wrapDatabase(db);

  if (!isServerless) {
    try {
      appDb.pragma("journal_mode = WAL");
    } catch {
      // ignore on environments that reject WAL
    }
  }
  appDb.pragma("foreign_keys = ON");
  migrate(appDb);
  dbInstance = appDb;
  return appDb;
}

function migrate(db: AppDatabase) {
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
    try {
      dbInstance.close();
    } catch {
      // ignore
    }
    dbInstance = null;
  }
  if (DB_PATH !== ":memory:" && fs.existsSync(DB_PATH)) {
    try {
      fs.unlinkSync(DB_PATH);
      for (const suffix of ["-wal", "-shm"]) {
        const side = `${DB_PATH}${suffix}`;
        if (fs.existsSync(side)) fs.unlinkSync(side);
      }
    } catch {
      // Windows may lock briefly; next open recreates
    }
  }
}
