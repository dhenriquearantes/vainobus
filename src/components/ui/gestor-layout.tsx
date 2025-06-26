import React, { useState } from 'react';
import { Menu } from '../menu';
import { Header } from './header';

interface GestorLayoutProps {
  children: React.ReactNode;
}

export function GestorLayout({ children }: GestorLayoutProps) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      { !menuCollapsed && (
        <div className="fixed top-0 left-0 h-full z-30 transition-all duration-300 w-56">
          <Menu collapsed={menuCollapsed} />
        </div>
      )}
      <div
        className={`transition-all duration-300 ${menuCollapsed ? 'ml-0' : 'ml-56'}`}
      >
        <Header collapsed={menuCollapsed} onToggleCollapse={() => setMenuCollapsed((prev) => !prev)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 