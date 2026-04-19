import Database from 'better-sqlite3';
import path from 'path';
import type { Trade, TradeRow, TradeTeamRow, Comment, VoteCount } from './types';

const DB_PATH = path.join(process.cwd(), 'nba-trades.db');

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma('journal_mode = WAL');
    _db.pragma('foreign_keys = ON');
    initSchema(_db);
  }
  return _db;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS trades (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      title TEXT NOT NULL,
      summary TEXT NOT NULL,
      context TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '[]'
    );

    CREATE TABLE IF NOT EXISTS trade_teams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      trade_id INTEGER NOT NULL,
      team TEXT NOT NULL,
      abbreviation TEXT NOT NULL,
      received TEXT NOT NULL,
      grade TEXT NOT NULL,
      outcome TEXT NOT NULL,
      timeline TEXT NOT NULL DEFAULT '[]',
      FOREIGN KEY (trade_id) REFERENCES trades(id)
    );

    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      trade_id INTEGER NOT NULL,
      author TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (trade_id) REFERENCES trades(id)
    );

    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      trade_id INTEGER NOT NULL,
      abbreviation TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (trade_id) REFERENCES trades(id)
    );

    CREATE INDEX IF NOT EXISTS idx_trade_teams_trade_id ON trade_teams(trade_id);
    CREATE INDEX IF NOT EXISTS idx_comments_trade_id ON comments(trade_id);
    CREATE INDEX IF NOT EXISTS idx_votes_trade_id ON votes(trade_id);
  `);
}

function rowToTrade(row: TradeRow, teamRows: TradeTeamRow[]): Trade {
  return {
    id: row.id,
    date: row.date,
    title: row.title,
    summary: row.summary,
    context: row.context,
    tags: JSON.parse(row.tags),
    teams: teamRows.map(t => ({
      team: t.team,
      abbreviation: t.abbreviation,
      received: JSON.parse(t.received),
      grade: t.grade as Trade['teams'][0]['grade'],
      outcome: t.outcome,
      timeline: JSON.parse(t.timeline || '[]'),
    })),
  };
}

export function getAllTrades(): Trade[] {
  const db = getDb();
  const tradeRows = db.prepare('SELECT * FROM trades ORDER BY date DESC').all() as TradeRow[];
  const teamStmt = db.prepare('SELECT * FROM trade_teams WHERE trade_id = ?');

  return tradeRows.map(row => {
    const teamRows = teamStmt.all(row.id) as TradeTeamRow[];
    return rowToTrade(row, teamRows);
  });
}

export function getTradeById(id: number): Trade | null {
  const db = getDb();
  const row = db.prepare('SELECT * FROM trades WHERE id = ?').get(id) as TradeRow | undefined;
  if (!row) return null;
  const teamRows = db.prepare('SELECT * FROM trade_teams WHERE trade_id = ?').all(id) as TradeTeamRow[];
  return rowToTrade(row, teamRows);
}

export function searchTrades(query: string): Trade[] {
  const db = getDb();
  const pattern = `%${query}%`;
  const tradeRows = db.prepare(`
    SELECT DISTINCT t.* FROM trades t
    LEFT JOIN trade_teams tt ON t.id = tt.trade_id
    WHERE t.title LIKE ? OR t.summary LIKE ? OR tt.team LIKE ? OR tt.received LIKE ? OR t.tags LIKE ?
    ORDER BY t.date DESC
  `).all(pattern, pattern, pattern, pattern, pattern) as TradeRow[];

  const teamStmt = db.prepare('SELECT * FROM trade_teams WHERE trade_id = ?');
  return tradeRows.map(row => {
    const teamRows = teamStmt.all(row.id) as TradeTeamRow[];
    return rowToTrade(row, teamRows);
  });
}

export function getTradesByTeam(abbreviation: string): Trade[] {
  const db = getDb();
  const tradeRows = db.prepare(`
    SELECT DISTINCT t.* FROM trades t
    JOIN trade_teams tt ON t.id = tt.trade_id
    WHERE tt.abbreviation = ?
    ORDER BY t.date DESC
  `).all(abbreviation) as TradeRow[];

  const teamStmt = db.prepare('SELECT * FROM trade_teams WHERE trade_id = ?');
  return tradeRows.map(row => {
    const teamRows = teamStmt.all(row.id) as TradeTeamRow[];
    return rowToTrade(row, teamRows);
  });
}

export function getComments(tradeId: number): Comment[] {
  const db = getDb();
  return db.prepare('SELECT * FROM comments WHERE trade_id = ? ORDER BY created_at DESC').all(tradeId) as Comment[];
}

export function addComment(tradeId: number, author: string, content: string): Comment {
  const db = getDb();
  const result = db.prepare('INSERT INTO comments (trade_id, author, content) VALUES (?, ?, ?)').run(tradeId, author, content);
  return db.prepare('SELECT * FROM comments WHERE id = ?').get(result.lastInsertRowid) as Comment;
}

export function getTradeCount(): number {
  const db = getDb();
  return (db.prepare('SELECT COUNT(*) as count FROM trades').get() as { count: number }).count;
}

export function getAllTeams(): string[] {
  const db = getDb();
  const rows = db.prepare('SELECT DISTINCT abbreviation FROM trade_teams ORDER BY abbreviation').all() as { abbreviation: string }[];
  return rows.map(r => r.abbreviation);
}

export function getVotes(tradeId: number): VoteCount[] {
  const db = getDb();
  return db.prepare(
    'SELECT abbreviation, COUNT(*) as count FROM votes WHERE trade_id = ? GROUP BY abbreviation'
  ).all(tradeId) as VoteCount[];
}

export function addVote(tradeId: number, abbreviation: string): VoteCount[] {
  const db = getDb();
  db.prepare('INSERT INTO votes (trade_id, abbreviation) VALUES (?, ?)').run(tradeId, abbreviation);
  return getVotes(tradeId);
}
