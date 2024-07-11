'use client';

import { createUrl } from '@/lib/utils';
import Link from 'next/link';

export default function CategoryButton({ item }: { item: string }) {
  const newParams = new URLSearchParams(`category=${item}`);

  return (
    <Link href={createUrl('/', newParams)}>
      <div className="py-3 px-10 border text-center">{item}</div>
    </Link>
  );
}
