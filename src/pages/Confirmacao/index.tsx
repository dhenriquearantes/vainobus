import { useState } from 'react';
import { confirmarTransporteEscolar } from '@/api/confirmacao';
import { Button } from '@/components/ui/button';
import { DashboardLayout } from '@/components/ui/gestor-layout';

// Dados mockados para exemplo visual
const mockRota = {
  saida: '07:05',
  chegada: '07:45',
  motorista: 'Carlos Silva',
  veiculo: 'ABC-1234',
  tempoViagem: '40 min',
};

const mockAluno = {
  nome: 'Ana Silva',
  escola: 'E.M. Centro',
  serie: '3º Ano',
  endereco: 'Rua A, 123 - Centro',
  responsavel: 'Maria Silva',
  telefone: '(11) 99999-1111',
};

export default function ConfirmacaoPage() {
  const [confirmado, setConfirmado] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  const dataISO = hoje.toISOString().slice(0, 10);

  async function handleConfirmacao(vaiUsar: boolean) {
    setLoading(true);
    setErro(null);
    try {
      await confirmarTransporteEscolar({ data: dataISO, vaiUsar });
      setConfirmado(vaiUsar);
    } catch (e) {
      setErro('Erro ao confirmar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto mt-4">
        <div className="text-center mb-2 text-gray-700">Olá, <b>{mockAluno.nome}</b>! <span className="ml-1">👋</span></div>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-700 text-lg font-semibold"><i className="fa fa-calendar" /></span>
            <span className="font-bold text-lg">Confirmação para Hoje</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">{dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)}</div>
          <div className="text-center text-base font-medium mb-4">Você vai precisar do transporte escolar hoje?</div>
          <div className="flex gap-4 justify-center">
            <Button
              className="w-48 bg-green-600 hover:bg-green-700"
              disabled={loading || confirmado === true}
              onClick={() => handleConfirmacao(true)}
            >
              {confirmado === true ? '✔️ Confirmado' : 'Sim, vou usar'}
            </Button>
            <Button
              className="w-48 border-red-600 text-red-600 hover:bg-red-50"
              variant="outline"
              disabled={loading || confirmado === false}
              onClick={() => handleConfirmacao(false)}
            >
              {confirmado === false ? '❌ Não vai usar' : 'Não vou usar'}
            </Button>
          </div>
          {erro && <div className="text-red-600 text-sm mt-2 text-center">{erro}</div>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Rota */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-700"><i className="fa fa-bus" /></span>
              <span className="font-bold text-base">Sua Rota</span>
            </div>
            <div className="text-xs text-gray-500 mb-4">Informações do transporte escolar</div>
            <div className="flex gap-2 mb-2">
              <div className="bg-blue-50 rounded p-2 flex-1 text-center">
                <div className="text-xs text-gray-500">Saída</div>
                <div className="text-lg font-bold text-blue-700">{mockRota.saida}</div>
              </div>
              <div className="bg-green-50 rounded p-2 flex-1 text-center">
                <div className="text-xs text-gray-500">Chegada</div>
                <div className="text-lg font-bold text-green-700">{mockRota.chegada}</div>
              </div>
            </div>
            <div className="text-sm mb-1"><b>Motorista:</b> {mockRota.motorista}</div>
            <div className="text-sm mb-1"><b>Veículo:</b> {mockRota.veiculo}</div>
            <div className="text-sm"><b>Tempo de viagem:</b> {mockRota.tempoViagem}</div>
          </div>
          {/* Card Informações */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-purple-700"><i className="fa fa-user" /></span>
              <span className="font-bold text-base">Suas Informações</span>
            </div>
            <div className="text-xs text-gray-500 mb-4">Dados cadastrais</div>
            <div className="text-sm mb-1"><b>Nome</b><br />{mockAluno.nome}</div>
            <div className="text-sm mb-1"><b>Escola</b><br /><span className="font-semibold">{mockAluno.escola}</span></div>
            <div className="text-sm mb-1"><b>Série</b><br />{mockAluno.serie}</div>
            <div className="text-sm mb-1"><b>Endereço</b><br />{mockAluno.endereco}</div>
            <hr className="my-2" />
            <div className="text-sm mb-1"><b>Responsável</b><br />{mockAluno.responsavel}</div>
            <div className="text-sm"><b>Telefone</b><br />{mockAluno.telefone}</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 