import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export function ActionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
      <Card className="h-full flex flex-col min-h-[180px] p-2 bg-white">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-medium text-gray-700">Confirmações Hoje</span>
            <span className="text-lg text-blue-600">📅</span>
          </div>
          <span className="text-xs text-gray-500">Gerencie as confirmações diárias dos alunos</span>
        </CardHeader>
        <CardContent className="flex-1 py-1">
          <div className="mb-1">
            <span className="text-gray-700 text-xs">Confirmados: </span>
            <span className="font-bold text-green-600 text-sm">180</span>
            <span className="text-gray-400 text-xs">/245</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1">
            <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '73%' }} />
          </div>
        </CardContent>
        <CardFooter className="pt-1">
          <button className="w-full bg-black text-white rounded-md py-1 text-sm font-semibold" onClick={() => alert('Ver Confirmações')}>Ver Confirmações</button>
        </CardFooter>
      </Card>

      <Card className="h-full flex flex-col min-h-[180px] p-2 bg-white">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-medium text-gray-700">Rotas do Dia</span>
            <span className="text-lg text-blue-600">🚌</span>
          </div>
          <span className="text-xs text-gray-500">Gerencie as rotas do dia</span>
        </CardHeader>
        <CardContent className="flex-1 py-1">
          <span className="text-gray-700 text-xs">Rotas disponíveis para o dia de hoje</span>
        </CardContent>
        <CardFooter className="pt-1">
          <button className="w-full bg-black text-white rounded-md py-1 text-sm font-semibold" onClick={() => alert('Ver Rotas')}>Ver Rotas</button>
        </CardFooter>
      </Card>      

      <Card className="h-full flex flex-col min-h-[180px] p-2 bg-white">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-medium text-gray-700">Relatórios</span>
            <span className="text-lg text-purple-500">📊</span>
          </div>
          <span className="text-xs text-gray-500">Acesse relatórios e estatísticas</span>
        </CardHeader>
        <CardContent className="flex-1 py-1">
          <span className="text-gray-700 text-xs">Relatórios disponíveis para análise e tomada de decisão</span>
        </CardContent>
        <CardFooter className="pt-1">
          <button className="w-full bg-black text-white rounded-md py-1 text-sm font-semibold" onClick={() => alert('Ver Relatórios')}>Ver Relatórios</button>
        </CardFooter>
      </Card>
    </div>
  );
} 