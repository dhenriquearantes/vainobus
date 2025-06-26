import { getUser, updateUser } from '@/api/user'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { LogOut, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { useState } from 'react';

export function AccountMenu() {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [nome, setNome] = useState('');

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      setModalOpen(false);
    },
  });

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate('/login', { replace: true })
    queryClient.clear();
  }

  function openEditModal() {
    setNome(user?.nome || '');
    setModalOpen(true);
  }

  function handleSave() {
    mutation.mutate({ nome });
  }

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md bg-white rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle>Alterar nome</DialogTitle>
            <DialogDescription>Digite o novo nome para sua conta.</DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={nome}
              onChange={e => setNome(e.target.value)}
              disabled={mutation.isPending}
              autoFocus
            />
          </div>
          <DialogFooter>
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
              onClick={handleSave}
              disabled={mutation.isPending || !nome.trim()}
            >
              Salvar
            </button>
            <DialogClose asChild>
              <button className="px-4 py-2 rounded border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50" type="button">
                Cancelar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
            <DropdownMenuItem className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors" onClick={openEditModal}>
              <User className="mr-2 h-4 w-4 text-gray-500" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center justify-between px-4 py-2 cursor-pointer text-red-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLogout}
            >
              <span className="flex items-center gap-2">
                <LogOut className="h-4 w-4 text-red-500" />
                Sair
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
