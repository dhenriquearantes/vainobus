import { getUser } from '@/api/user'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { LogOut, User } from 'lucide-react'

export function AccountMenu() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors">
          <User className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{user?.nome?.split(' ')[0] || ''}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white rounded-2xl shadow-2xl p-2 border border-gray-200"
      >
        <div className="px-4 py-2 border-b">
          <span className="block text-sm font-bold text-gray-900">Minha Conta</span>
        </div>
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
            <User className="mr-2 h-4 w-4 text-gray-500" />
            <span>Perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between px-4 py-2 cursor-pointer text-red-600 font-medium hover:bg-gray-100 rounded-lg transition-colors">
            <span className="flex items-center gap-2">
              <LogOut className="h-4 w-4 text-red-500" />
              Sair
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
