import { ReactNode } from 'react';
import { Navbar } from './_components/navbar';
import { SearchBar } from '@/components/searchbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 max-w-7xl xl:mx-auto mx-4">
        <SearchBar />
        {children}
      </main>
    </>
  );
}
