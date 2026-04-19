import { NextRequest, NextResponse } from 'next/server';
import { getComments, addComment } from '@/lib/db';

export async function GET(request: NextRequest) {
  const tradeId = parseInt(request.nextUrl.searchParams.get('tradeId') || '0', 10);
  if (!tradeId) {
    return NextResponse.json([], { status: 400 });
  }
  const comments = getComments(tradeId);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { tradeId, author, content } = body;

  if (!tradeId || !author?.trim() || !content?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (author.length > 50 || content.length > 1000) {
    return NextResponse.json({ error: 'Content too long' }, { status: 400 });
  }

  const comment = addComment(tradeId, author.trim(), content.trim());
  return NextResponse.json(comment);
}
