import { getUser } from '@/api/user'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuTrigger, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { Bell, Trash } from 'lucide-react'
import { useState } from 'react'

export function Notifications() {
  // Exemplo de notificações (pode ser substituído por props ou API futuramente)
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Motorista José está a caminho do ponto de ônibus.' },
    // Adicione mais notificações aqui se quiser
  ])

  const unreadCount = notifications.length

  function clearNotifications() {
    setNotifications([])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors">
          <Bell className="h-5 w-5 text-gray-500 hover:text-primary transition-colors" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-72 bg-white rounded-2xl shadow-2xl p-2 border border-gray-200"
      >
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <span className="block text-base font-semibold text-gray-900">Notificações</span>
          {unreadCount > 0 && (
            <button
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              onClick={clearNotifications}
            >
              <Trash className="h-4 w-4" /> Limpar
            </button>
          )}
        </div>
        <DropdownMenuGroup>
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-400 text-sm select-none">
              Sem novas notificações
            </div>
          ) : (
            notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors rounded-lg border-b last:border-b-0 border-gray-100"
              >
                <span className="text-sm text-gray-700">{n.message}</span>
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
