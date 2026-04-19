import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTradeById, getVotes } from '@/lib/db';
import GradeBadge from '@/components/GradeBadge';
import TeamBadge from '@/components/TeamBadge';
import CommentSection from '@/components/CommentSection';
import TradeVote from '@/components/TradeVote';
import DeepDive from '@/components/DeepDive';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TradeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tradeId = parseInt(id, 10);
  const trade = getTradeById(tradeId);

  if (!trade) {
    notFound();
  }

  const votes = getVotes(tradeId);

  const tradeDate = new Date(trade.date);
  const formattedDate = tradeDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-500 transition-colors mb-6">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to all trades
      </Link>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm text-gray-400 font-mono">{formattedDate}</span>
          {trade.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{trade.title}</h1>
        <p className="text-gray-600 text-lg">{trade.summary}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Trade Context</h2>
        <p className="text-gray-600 leading-relaxed">{trade.context}</p>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">The Deal</h2>

      <div className="grid gap-4 md:grid-cols-2 mb-8">
        {trade.teams.map((team, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TeamBadge abbreviation={team.abbreviation} size="lg" />
                <h3 className="text-lg font-bold text-gray-900">{team.team}</h3>
              </div>
              <GradeBadge grade={team.grade} size="lg" />
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Received</h4>
              <ul className="space-y-1">
                {team.received.map((asset, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    {asset}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">How It Worked Out</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{team.outcome}</p>
            </div>
          </div>
        ))}
      </div>

      <DeepDive teams={trade.teams} />

      <TradeVote
        tradeId={tradeId}
        teams={trade.teams.map(t => ({ team: t.team, abbreviation: t.abbreviation }))}
        initialVotes={votes}
      />

      <CommentSection tradeId={tradeId} />
    </div>
  );
}
