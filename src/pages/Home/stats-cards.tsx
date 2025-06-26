import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  diff?: string;
  diffColor?: string;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border bg-white p-3 shadow-sm min-w-[140px] rounded-xl">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600 font-medium">{title}</span>
        <span className="bg-gray-100 rounded-full p-1 flex items-center justify-center">{icon}</span>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-2xl font-bold text-gray-900">{value}</span>   
      </div>
    </div>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <StatCard
        title="Total de Alunos"
        value={245}
        icon={<span className="text-lg text-blue-600">🚍</span>}
      />
      <StatCard
        title="Media de Frequência"
        value="85%"
        icon={<span className="text-lg text-green-600">👥</span>}
      />
      <StatCard
        title="Alunos Cadastrados"
        value={245}
        icon={<span className="text-lg text-purple-600">🧑‍🎓</span>}
      />
      <StatCard
        title="Rotas Hoje"
        value={6}
        icon={<span className="text-lg text-orange-500">🔗</span>}
      />
    </div>
  );
} 