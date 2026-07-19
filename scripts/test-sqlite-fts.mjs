import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");
db.exec(`
  CREATE VIRTUAL TABLE document_fts USING fts5(content, tokenize='porter');
  INSERT INTO document_fts(content) VALUES ('asbestos register Queensland');
`);
console.log(db.prepare(`SELECT content FROM document_fts WHERE document_fts MATCH 'asbestos'`).all());
