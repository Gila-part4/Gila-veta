import React from 'react';
import Logo from '@/components/logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <Logo size={200} />
      <main>{children}</main>
    </div>
  );
}
