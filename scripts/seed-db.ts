import Database from 'better-sqlite3';
import path from 'path';
import { allTrades } from '../src/data';

const DB_PATH = path.join(process.cwd(), 'nba-trades.db');

console.log('Seeding database at:', DB_PATH);

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  DROP TABLE IF EXISTS votes;
  DROP TABLE IF EXISTS comments;
  DROP TABLE IF EXISTS trade_teams;
  DROP TABLE IF EXISTS trades;

  CREATE TABLE trades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    context TEXT NOT NULL,
    tags TEXT NOT NULL DEFAULT '[]'
  );

  CREATE TABLE trade_teams (
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

  CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_id INTEGER NOT NULL,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (trade_id) REFERENCES trades(id)
  );

  CREATE TABLE votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_id INTEGER NOT NULL,
    abbreviation TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (trade_id) REFERENCES trades(id)
  );

  CREATE INDEX idx_trade_teams_trade_id ON trade_teams(trade_id);
  CREATE INDEX idx_comments_trade_id ON comments(trade_id);
  CREATE INDEX idx_votes_trade_id ON votes(trade_id);
`);

const insertTrade = db.prepare(`
  INSERT INTO trades (date, title, summary, context, tags)
  VALUES (?, ?, ?, ?, ?)
`);

const insertTeam = db.prepare(`
  INSERT INTO trade_teams (trade_id, team, abbreviation, received, grade, outcome, timeline)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

const seedAll = db.transaction(() => {
  for (const trade of allTrades) {
    const result = insertTrade.run(
      trade.date,
      trade.title,
      trade.summary,
      trade.context,
      JSON.stringify(trade.tags)
    );
    const tradeId = result.lastInsertRowid;

    for (const team of trade.teams) {
      insertTeam.run(
        tradeId,
        team.team,
        team.abbreviation,
        JSON.stringify(team.received),
        team.grade,
        team.outcome,
        JSON.stringify(team.timeline || [])
      );
    }
  }
});

seedAll();

const count = (db.prepare('SELECT COUNT(*) as count FROM trades').get() as { count: number }).count;
const teamCount = (db.prepare('SELECT COUNT(*) as count FROM trade_teams').get() as { count: number }).count;

console.log(`Seeded ${count} trades with ${teamCount} team entries.`);
db.close();
