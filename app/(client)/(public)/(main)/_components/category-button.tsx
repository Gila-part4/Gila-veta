'use client';

import { createUrl } from '@/util/createUrl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CategoryButton({ item }: { item: string }) {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set('category', item);

  return (
    <Link
      href={createUrl('/', newSearchParams)}
      className={`py-3 px-10 border text-center ${searchParams.get('category') === item ? 'bg-slate-200' : 'bg-white'}`}
    >
      {item}
    </Link>
  );
}
