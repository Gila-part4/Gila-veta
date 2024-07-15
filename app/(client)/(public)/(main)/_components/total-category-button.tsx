'use client';

import { createUrl } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function TotalCategoryButton() {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.delete('category');

  return (
    <Link
      href={createUrl('/', newSearchParams)}
      className={`py-3 px-10 border text-center ${searchParams.get('category') ? 'bg-white' : 'bg-slate-200'}`}
    >
      전체
    </Link>
  );
}
