import React, { useState, useEffect } from 'react';

interface VotacaoProps {
  loading: boolean;
  confirmado: boolean | null;
  erro: string | null;
  user: any;
  dataFormatada: string;
  onClickConfirmar: (vaiUsar: boolean) => void;
  mockRota: any;
  mockAluno: any;
}

export function Votacao({ loading, confirmado, erro, user, dataFormatada, onClickConfirmar, mockRota, mockAluno }: VotacaoProps) {
  const [selected, setSelected] = useState<boolean | null>(null);

  useEffect(() => {
    if (!loading) {
      setSelected(confirmado);
    }
  }, [loading, confirmado]);

  const handleClick = (vaiUsar: boolean) => {
    setSelected(vaiUsar);
    onClickConfirmar(vaiUsar);
  };

  return (
    <div className="w-full mx-auto mt-4 flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
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
          <div className="text-sm mb-1"><b>Ponto:</b> {mockRota.ponto}</div>
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
          <div className="text-sm mb-1"><b>Nome</b><br />{user?.nome}</div>
          <div className="text-sm mb-1"><b>Instituição de ensino</b><br /><span className="font-semibold">{mockAluno.instituicao}</span></div>
          <div className="text-sm mb-1"><b>Série</b><br />{mockAluno.serie}</div>
          <div className="text-sm mb-1"><b>Endereço</b><br />{mockAluno.endereco}</div>
          <hr className="my-2" />
          <div className="text-sm mb-1"><b>Responsável</b><br />{mockAluno.responsavel}</div>
          <div className="text-sm"><b>Telefone</b><br />{mockAluno.telefone}</div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-2">
        <div className="flex items-center gap-2 mb-2">
        </div>
        <div className="text-center text-base font-medium mb-4">Você vai precisar do transporte escolar hoje?</div>
        <div className="flex gap-4 justify-center">
          <button
            className={`w-40 py-2 rounded text-white font-semibold ${selected === true ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} ${loading ? 'opacity-60' : ''}`}
            disabled={loading}
            onClick={() => handleClick(true)}
          >
            {selected === true ? (loading ? '✔️ Confirmando...' : '✔️ Confirmado') : 'Sim, vou usar'}
          </button>
          <button
            className={`w-40 py-2 rounded border border-red-600 text-red-600 font-semibold bg-white hover:bg-red-50 ${selected === false ? 'bg-red-100' : ''} ${loading ? 'opacity-60' : ''}`}
            disabled={loading}
            onClick={() => handleClick(false)}
          >
            {selected === false ? (loading ? '❌ Confirmando...' : '❌ Não vai usar') : 'Não vou usar'}
          </button>
        </div>
        {erro && <div className="text-red-600 text-sm mt-2 text-center">{erro}</div>}
      </div>
    </div>
  );
}