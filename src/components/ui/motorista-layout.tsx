import React, { useState } from 'react';
import { Header } from './header';

interface MotoristaLayoutProps {
  children: React.ReactNode;
}

export function MotoristaLayout({ children }: MotoristaLayoutProps) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header collapsed={menuCollapsed} onToggleCollapse={() => setMenuCollapsed((prev) => !prev)} menuVisible={false} />
      <main className="p-6">{children}</main>
    </div>
  );
} 