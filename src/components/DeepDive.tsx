import type { Trade } from '@/lib/types';
import TeamBadge from './TeamBadge';

export default function DeepDive({ teams }: { teams: Trade['teams'] }) {
  const teamsWithTimelines = teams.filter(t => t.timeline && t.timeline.length > 0);

  if (teamsWithTimelines.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h6m0 0l-3-3m3 3l-3 3M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
          </svg>
          Deep Dive
        </h3>
        <span className="text-xs text-gray-400 uppercase tracking-wider">Post-trade milestones</span>
      </div>

      <div className={`grid gap-4 ${teamsWithTimelines.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {teamsWithTimelines.map((team, idx) => (
          <div key={idx} className="border border-gray-100 rounded-lg p-4 bg-gray-50/40">
            <div className="flex items-center gap-2 mb-3">
              <TeamBadge abbreviation={team.abbreviation} size="sm" />
              <span className="text-sm font-semibold text-gray-800">{team.team}</span>
            </div>

            <ol className="relative border-l-2 border-gray-200 ml-2 space-y-3">
              {team.timeline!.map((entry, i) => (
                <li key={i} className="pl-4 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-2 ring-white" />
                  <div className="text-[11px] font-mono uppercase tracking-wider text-orange-600 mb-0.5">
                    {entry.season}
                  </div>
                  <div className="text-sm text-gray-700 leading-snug">
                    {entry.event}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
