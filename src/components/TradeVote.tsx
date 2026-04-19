'use client';

import { useState } from 'react';
import type { VoteCount } from '@/lib/types';
import TeamBadge from './TeamBadge';

interface TradeVoteProps {
  tradeId: number;
  teams: { team: string; abbreviation: string }[];
  initialVotes: VoteCount[];
}

export default function TradeVote({ tradeId, teams, initialVotes }: TradeVoteProps) {
  const [votes, setVotes] = useState<VoteCount[]>(initialVotes);
  const [voted, setVoted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalVotes = votes.reduce((sum, v) => sum + v.count, 0);

  const getVoteCount = (abbr: string) => {
    return votes.find(v => v.abbreviation === abbr)?.count || 0;
  };

  const getPercentage = (abbr: string) => {
    if (totalVotes === 0) return 0;
    return Math.round((getVoteCount(abbr) / totalVotes) * 100);
  };

  const handleVote = async (abbreviation: string) => {
    if (voted || submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tradeId, abbreviation }),
      });
      const newVotes = await res.json();
      setVotes(newVotes);
      setVoted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const winningAbbr = votes.length > 0
    ? votes.reduce((a, b) => a.count > b.count ? a : b).abbreviation
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Who Won This Trade?
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        {voted
          ? `Thanks for voting! ${totalVotes} total vote${totalVotes !== 1 ? 's' : ''}`
          : 'Cast your vote for the team that came out ahead'
        }
      </p>

      <div className="space-y-3">
        {teams.map((team) => {
          const pct = getPercentage(team.abbreviation);
          const count = getVoteCount(team.abbreviation);
          const isWinning = winningAbbr === team.abbreviation && totalVotes > 0;

          return (
            <button
              key={team.abbreviation}
              onClick={() => handleVote(team.abbreviation)}
              disabled={voted || submitting}
              className={`w-full text-left rounded-lg border transition-all duration-200 p-3 relative overflow-hidden group ${
                voted
                  ? isWinning
                    ? 'border-orange-300 bg-orange-50/50'
                    : 'border-gray-200 bg-gray-50/50'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/30 cursor-pointer'
              } ${submitting ? 'opacity-60' : ''}`}
            >
              {voted && (
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-500 ${
                    isWinning ? 'bg-orange-100/60' : 'bg-gray-100/60'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              )}

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TeamBadge abbreviation={team.abbreviation} size="md" />
                  <span className="font-medium text-gray-800">{team.team}</span>
                  {isWinning && voted && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">
                      Leading
                    </span>
                  )}
                </div>

                {voted ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{count} vote{count !== 1 ? 's' : ''}</span>
                    <span className={`text-sm font-bold min-w-[3ch] text-right ${isWinning ? 'text-orange-600' : 'text-gray-400'}`}>
                      {pct}%
                    </span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400 group-hover:text-orange-500 transition-colors">
                    Vote
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
