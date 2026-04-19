import { NextRequest, NextResponse } from 'next/server';
import { getVotes, addVote } from '@/lib/db';

export async function GET(request: NextRequest) {
  const tradeId = parseInt(request.nextUrl.searchParams.get('tradeId') || '0', 10);
  if (!tradeId) {
    return NextResponse.json([], { status: 400 });
  }
  return NextResponse.json(getVotes(tradeId));
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { tradeId, abbreviation } = body;

  if (!tradeId || !abbreviation?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const votes = addVote(tradeId, abbreviation.trim());
  return NextResponse.json(votes);
}
