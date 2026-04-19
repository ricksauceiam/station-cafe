import { tradesPart1 } from './trades-part1';
import { tradesPart2 } from './trades-part2';
import { tradesPart3 } from './trades-part3';
import type { SeedTrade } from './types';

export type { SeedTrade };

export const allTrades: SeedTrade[] = [
  ...tradesPart1,
  ...tradesPart2,
  ...tradesPart3,
];
