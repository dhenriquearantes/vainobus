import { AccountMenu } from '../account-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { PanelRightOpen } from 'lucide-react';
import logo from '@/assets/logo.svg';

interface HeaderProps {
  menuVisible: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Header({ menuVisible, collapsed, onToggleCollapse }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        {menuVisible ? (
          <button onClick={onToggleCollapse}>
            <PanelRightOpen size={16} className={`text-gray-600 hover:bg-accent-foreground ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        ) : (
          <img src={logo} alt="Vai no Bus" className="h-10 w-auto" />
        )}
        <Separator aria-orientation="vertical" className="h-12 w-px bg-gray-200" />
        <div className="ml-auto flex items-center space-x-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  );
} 