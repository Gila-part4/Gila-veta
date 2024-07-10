import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col items-center justify-center h-screen p-4">{children}</main>;
}

export default Layout;
