
function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full mt-4">
      <div
        className="h-3 bg-green-500 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

interface StatsCardsProps {
  onClickConfirmarTransporte: () => void;
  confirmado: boolean | null;
  loading: boolean;
}

export function StatsCards({ onClickConfirmarTransporte, confirmado, loading }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {/* Card Frequência */}
      <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm min-h-[200px] rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-medium text-gray-700">Frequência</span>
          <span className="text-green-500 text-xl font-bold">85%</span>
        </div>
        <ProgressBar value={85} />
      </div>

      {/* Card Faltas */}
      <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm min-h-[200px] rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-medium text-gray-700">Faltas</span>
          <span className="text-red-500 text-xl font-bold">12</span>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <div className="flex justify-between mb-1">
            <span>Sexta-feira</span>
            <span className="text-xs text-gray-500">5 Faltas</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Quarta-feira</span>
            <span className="text-xs text-gray-500">4 Faltas</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Terça-feira</span>
            <span className="text-xs text-gray-500">3 Faltas</span>
          </div>
        </div>
      </div>

      {/* Card Avisos */}
      <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm min-h-[200px] rounded-xl">
        <span className="text-lg font-medium text-gray-700 mb-2">Avisos</span>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <div>
            <div>Não haverá transporte de 15/05/25</div>
            <div className="text-xs text-gray-400">Há 2 dias</div>
          </div>
          <div>
            <div>Limite de faltas atingido em sexta-feira</div>
            <div className="text-xs text-gray-400">Há 1 semana</div>
          </div>
          <div>
            <div>Não haverá transporte de 14/04/2025</div>
            <div className="text-xs text-gray-400">Há 2 semanas</div>
          </div>
        </div>
      </div>

      {/* Card Confirmação de Transporte */}
      <div className="flex flex-col justify-center items-center rounded-lg bg-white p-4 md:p-5 shadow-sm min-h-[140px] md:min-h-[180px] rounded-xl">
        <span className="text-base font-medium text-gray-700 mb-2 text-center">Confirmação de transporte</span>
        {confirmado === true && (
          <>
            <span className="text-lg md:text-xl font-bold text-green-600 mb-1">SIM</span>
            <span className="text-xs md:text-sm text-gray-700 mb-2 text-center">Você confirmou que vai usar o transporte hoje.</span>
          </>
        )}
        {confirmado === false && (
          <>
            <span className="text-lg md:text-xl font-bold text-red-500 mb-1">NÃO</span>
            <span className="text-xs md:text-sm text-gray-700 mb-2 text-center">Você confirmou que NÃO vai usar o transporte hoje.</span>
          </>
        )}
        {confirmado === null && (
          <>
            <span className="text-lg md:text-xl font-bold text-gray-400 mb-1">Sem resposta</span>
            <span className="text-xs md:text-sm text-gray-500 mb-2 text-center">Você ainda não respondeu.</span>
          </>
        )}
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 mt-1 w-full max-w-xs"
          onClick={onClickConfirmarTransporte}
          disabled={loading}
        >
          {loading
            ? 'Carregando...'
            : confirmado === null
              ? 'Confirmar transporte'
              : 'Alterar resposta'}
        </button>
      </div>
    </div>
  );
} 