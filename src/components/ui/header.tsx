import { AccountMenu } from '../account-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { PanelRightOpen } from 'lucide-react';


interface HeaderProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Header({ collapsed, onToggleCollapse }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <button onClick={onToggleCollapse}>
          <PanelRightOpen size={16} className={`text-gray-600 hover:bg-accent-foreground ${collapsed ? 'rotate-180' : ''}`} />
        </button>
        <Separator aria-orientation="vertical" className="h-12 w-px bg-gray-200" />
        <div className="ml-auto flex items-center space-x-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  );
} 