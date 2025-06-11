import logo from '@/assets/logo.svg';
import { Notifications } from '../notifications';
import { AccountMenu } from '../account-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="Vai no Bus" className="h-12 w-auto" />
        <Separator aria-orientation="vertical" className="h-12 w-px bg-gray-200" />
        <div className="ml-auto flex items-center space-x-2">
          <Notifications />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
} 