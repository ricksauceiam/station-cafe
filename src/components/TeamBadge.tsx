const teamColors: Record<string, { bg: string; text: string }> = {
  LAL: { bg: 'bg-purple-700', text: 'text-yellow-300' },
  BOS: { bg: 'bg-green-700', text: 'text-white' },
  GSW: { bg: 'bg-blue-600', text: 'text-yellow-300' },
  CHI: { bg: 'bg-red-600', text: 'text-white' },
  MIA: { bg: 'bg-red-700', text: 'text-white' },
  BKN: { bg: 'bg-gray-800', text: 'text-white' },
  NYK: { bg: 'bg-blue-600', text: 'text-orange-400' },
  PHI: { bg: 'bg-blue-700', text: 'text-red-400' },
  TOR: { bg: 'bg-red-600', text: 'text-white' },
  CLE: { bg: 'bg-red-800', text: 'text-yellow-300' },
  HOU: { bg: 'bg-red-600', text: 'text-white' },
  DAL: { bg: 'bg-blue-700', text: 'text-white' },
  PHX: { bg: 'bg-purple-600', text: 'text-orange-400' },
  DEN: { bg: 'bg-blue-800', text: 'text-yellow-300' },
  MIL: { bg: 'bg-green-800', text: 'text-white' },
  LAC: { bg: 'bg-red-600', text: 'text-blue-300' },
  MIN: { bg: 'bg-blue-800', text: 'text-green-300' },
  OKC: { bg: 'bg-blue-500', text: 'text-orange-400' },
  IND: { bg: 'bg-yellow-500', text: 'text-blue-900' },
  SAC: { bg: 'bg-purple-700', text: 'text-gray-200' },
  ATL: { bg: 'bg-red-600', text: 'text-white' },
  POR: { bg: 'bg-red-700', text: 'text-white' },
  SAS: { bg: 'bg-gray-700', text: 'text-white' },
  WAS: { bg: 'bg-blue-800', text: 'text-red-400' },
  ORL: { bg: 'bg-blue-600', text: 'text-white' },
  MEM: { bg: 'bg-blue-700', text: 'text-yellow-200' },
  NOP: { bg: 'bg-blue-800', text: 'text-yellow-300' },
  CHA: { bg: 'bg-teal-600', text: 'text-white' },
  DET: { bg: 'bg-red-600', text: 'text-blue-300' },
  UTA: { bg: 'bg-yellow-500', text: 'text-blue-900' },
};

const defaultColors = { bg: 'bg-gray-600', text: 'text-white' };

export default function TeamBadge({ abbreviation, size = 'md' }: { abbreviation: string; size?: 'sm' | 'md' | 'lg' }) {
  const colors = teamColors[abbreviation] || defaultColors;
  const sizeClass = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-xs px-2 py-1',
    lg: 'text-sm px-3 py-1.5',
  }[size];

  return (
    <span className={`inline-flex items-center justify-center rounded font-bold ${colors.bg} ${colors.text} ${sizeClass}`}>
      {abbreviation}
    </span>
  );
}
