export type Grade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F';

export interface TimelineEntry {
  season: string;
  event: string;
}

export interface TradeTeam {
  team: string;
  abbreviation: string;
  received: string[];
  grade: Grade;
  outcome: string;
  timeline?: TimelineEntry[];
}

export interface Trade {
  id: number;
  date: string;
  title: string;
  summary: string;
  context: string;
  teams: TradeTeam[];
  tags: string[];
}

export interface Comment {
  id: number;
  trade_id: number;
  author: string;
  content: string;
  created_at: string;
}

export interface TradeRow {
  id: number;
  date: string;
  title: string;
  summary: string;
  context: string;
  tags: string;
}

export interface TradeTeamRow {
  id: number;
  trade_id: number;
  team: string;
  abbreviation: string;
  received: string;
  grade: string;
  outcome: string;
  timeline: string;
}

export interface VoteCount {
  abbreviation: string;
  count: number;
}
