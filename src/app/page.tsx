import { Suspense } from 'react';
import { getAllTrades, searchTrades, getTradesByTeam, getTradeCount } from '@/lib/db';
import TradeCard from '@/components/TradeCard';
import TradeFilter from '@/components/TradeFilter';
import type { Trade } from '@/lib/types';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ q?: string; team?: string; year?: string; sort?: string }>;
}

async function TradeList({ searchParams }: { searchParams: { q?: string; team?: string; year?: string; sort?: string } }) {
  let trades: Trade[];

  if (searchParams.q) {
    trades = searchTrades(searchParams.q);
  } else if (searchParams.team) {
    trades = getTradesByTeam(searchParams.team);
  } else {
    trades = getAllTrades();
  }

  if (searchParams.year) {
    trades = trades.filter(t => t.date.startsWith(searchParams.year!));
  }

  if (searchParams.sort === 'date-asc') {
    trades.sort((a, b) => a.date.localeCompare(b.date));
  }

  const totalCount = getTradeCount();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          Showing <span className="text-gray-900 font-medium">{trades.length}</span>
          {trades.length !== totalCount && <> of <span className="text-gray-900 font-medium">{totalCount}</span></>}
          {' '}trades
        </p>
      </div>

      {trades.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg mb-2">No trades found</p>
          <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {trades.map(trade => (
            <TradeCard key={trade.id} trade={trade} />
          ))}
        </div>
      )}
    </>
  );
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          NBA Trade Tracker
        </h1>
        <p className="text-gray-500 max-w-2xl">
          A comprehensive database of notable NBA trades from the past 20 years.
          See what each team gave up, what they got, and how it all worked out.
        </p>
      </div>

      <Suspense fallback={<div className="text-gray-400">Loading filters...</div>}>
        <TradeFilter />
      </Suspense>

      <Suspense fallback={<div className="text-gray-400 py-8">Loading trades...</div>}>
        <TradeList searchParams={params} />
      </Suspense>
    </div>
  );
}
