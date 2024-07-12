'use client';

import { createUrl } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CategoryButton({ item }: { item: string }) {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set('category', item);

  return (
    <Link href={createUrl('/', newSearchParams)}>
      <div className="py-3 px-10 border text-center">{item}</div>
    </Link>
  );
}
