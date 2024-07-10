import React from 'react';
import Logo from './_components/logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <Logo />
      {children}
    </main>
  );
}
