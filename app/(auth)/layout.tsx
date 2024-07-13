import React from 'react';
import Logo from '@/app/(auth)/_components/Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <main className="flex flex-col items-center justify-center p-4">{children}</main>
    </div>
  );
}
