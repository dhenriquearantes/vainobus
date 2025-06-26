import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { AlunoLayout } from '@/components/ui/aluno-layout';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Votacao } from './votacao';
import { StatsCards } from './stats-cards';
import { PersonalDataCard } from './personal-data-card';

const mockRota = {
  saida: '17:50',
  chegada: '22:30',
  motorista: 'Marcos Silva',
  veiculo: 'ABC-1234',
  tempoViagem: '40 min',
  ponto: 'Praça Central',
};

const mockAluno = {
  instituicao: 'E.M. Centro',
  serie: '3º Ano',
  endereco: 'Rua A, 123 - Centro',
  responsavel: 'Maria Silva',
  telefone: '(11) 99999-1111',
  email: 'aluno@email.com',
  matricula: '123456',
  dataNascimento: '15/03/2007',
  telefoneResponsavel: '(11) 99999-1111',
};

export function AlunoPage() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmado, setConfirmado] = useState<null | boolean>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [pendingChoice, setPendingChoice] = useState<null | boolean>(null);

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

  async function handleConfirmacao() {
    if (pendingChoice === null) return;
    setLoading(true);
    setErro(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setConfirmado(pendingChoice);
    } catch (e) {
      setErro('Erro ao confirmar. Tente novamente.');
    } finally {
      setLoading(false);
      setModalOpen(false);
      setPendingChoice(null);
    }
  }

  function onClickConfirmar(vaiUsar: boolean) {
    setPendingChoice(vaiUsar);
    setModalOpen(true);
  }

  return (
    <AlunoLayout>
      <div className="flex flex-col gap-4">
        <StatsCards
          onClickConfirmarTransporte={() => setModalOpen(true)}
          confirmado={confirmado === undefined ? null : confirmado}
          loading={loading}
        />
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-3xl bg-white rounded-2xl shadow-2xl">
            <DialogHeader>
              <DialogTitle>Confirmação de transporte</DialogTitle>
              <DialogDescription>
                Você vai precisar do transporte escolar hoje?
                <div className="text-xs text-gray-500 mb-4">{dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)}</div>
              </DialogDescription>
            </DialogHeader>
            <Votacao
              loading={loading}
              confirmado={confirmado}
              erro={erro}
              user={user}
              dataFormatada={dataFormatada}
              onClickConfirmar={onClickConfirmar}
              mockRota={mockRota}
              mockAluno={mockAluno}
            />
            <DialogFooter>
              <button
                className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
                onClick={handleConfirmacao}
                disabled={loading || pendingChoice === null}
              >
                Confirmar
              </button>
              <DialogClose asChild>
                <button className="px-4 py-2 rounded border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50" type="button">
                  Cancelar
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <PersonalDataCard mockAluno={mockAluno} />
      </div>
    </AlunoLayout>
  );
} 
