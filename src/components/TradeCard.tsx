import Link from 'next/link';
import type { Trade } from '@/lib/types';
import GradeBadge from './GradeBadge';
import TeamBadge from './TeamBadge';

export default function TradeCard({ trade }: { trade: Trade }) {
  const year = new Date(trade.date).getFullYear();

  return (
    <Link href={`/trades/${trade.id}`} className="block group">
      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-all duration-200 hover:shadow-md">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs text-gray-400 font-mono">{trade.date}</span>
              {trade.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-gray-900 font-semibold text-lg group-hover:text-orange-600 transition-colors leading-tight">
              {trade.title}
            </h3>
          </div>
          <span className="text-2xl font-bold text-gray-200 font-mono">{year}</span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{trade.summary}</p>

        <div className="space-y-2">
          {trade.teams.map((team, i) => (
            <div key={i} className="flex items-center gap-2">
              <TeamBadge abbreviation={team.abbreviation} size="sm" />
              <span className="text-gray-600 text-sm truncate flex-1">
                {team.received.slice(0, 3).join(', ')}
                {team.received.length > 3 && ` +${team.received.length - 3} more`}
              </span>
              <GradeBadge grade={team.grade} size="sm" />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
