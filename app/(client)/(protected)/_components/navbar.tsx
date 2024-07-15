'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: '/my-page', label: '내정보' },
  { path: '/my-experience', label: '내 체험 관리' },
  { path: '/reservation-history', label: '예약 내역' },
  { path: '/reservation-status', label: '예약 현황' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-2">
      {routes.map((route) => (
        <Button
          key={route.path}
          variant={'ghost'}
          asChild
          className={cn(pathname === route.path && 'bg-slate-300 hover:bg-slate-300')}
        >
          <Link href={route.path}>{route.label}</Link>
        </Button>
      ))}
    </div>
  );
}
