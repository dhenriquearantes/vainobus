import React from 'react';
import { Header } from './header';

interface AlunoLayoutProps {
  children: React.ReactNode;
}

export function AlunoLayout({ children }: AlunoLayoutProps) {

  return (
    <div className="min-h-screen bg-gray-100">  
      <Header menuVisible={false} collapsed={false} onToggleCollapse={() => {}} />
      <main className="p-6">{children}</main>
    </div>
  );
} 