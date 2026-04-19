export interface SeedTrade {
  date: string;
  title: string;
  summary: string;
  context: string;
  tags: string[];
  teams: {
    team: string;
    abbreviation: string;
    received: string[];
    grade: string;
    outcome: string;
    timeline?: { season: string; event: string }[];
  }[];
}
