import type { Grade } from '@/lib/types';

const gradeColors: Record<string, string> = {
  'A+': 'bg-emerald-500 text-white',
  'A':  'bg-emerald-500 text-white',
  'A-': 'bg-emerald-400 text-white',
  'B+': 'bg-green-400 text-white',
  'B':  'bg-green-400 text-white',
  'B-': 'bg-lime-400 text-gray-900',
  'C+': 'bg-yellow-400 text-gray-900',
  'C':  'bg-yellow-400 text-gray-900',
  'C-': 'bg-amber-400 text-gray-900',
  'D+': 'bg-orange-400 text-white',
  'D':  'bg-orange-500 text-white',
  'D-': 'bg-orange-600 text-white',
  'F':  'bg-red-500 text-white',
};

export default function GradeBadge({ grade, size = 'md' }: { grade: Grade | string; size?: 'sm' | 'md' | 'lg' }) {
  const colorClass = gradeColors[grade] || 'bg-gray-500 text-white';
  const sizeClass = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-lg px-3 py-1.5 font-bold',
  }[size];

  return (
    <span className={`inline-flex items-center justify-center rounded font-semibold ${colorClass} ${sizeClass}`}>
      {grade}
    </span>
  );
}
