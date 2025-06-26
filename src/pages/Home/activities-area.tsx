import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Activity {
  id: number;
  user: string;
  description: string;
  time: string;
  color: string;
}

const activities: Activity[] = [
  {
    id: 1,
    user: 'João Silva',
    description: 'marcou presença',
    time: '2 minutos atrás',
    color: 'bg-blue-100',
  },
  {
    id: 2,
    user: 'Sarah',
    description: 'marcou presença',
    time: '6 minutos atrás',
    color: 'bg-red-100',
  },
  {
    id: 3,
    user: 'Relatório de Faltas (21/06/24)',
    description: 'gerado',
    time: '1 hora atrás',
    color: 'bg-green-100',
  },
];

export function ActivitiesArea() {
  return (
    <Card className="flex flex-col justify-between rounded-lg border bg-white p-3 shadow-sm min-w-[140px] rounded-xl">
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
      </CardHeader>
      <CardContent>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-md ${activity.color}`}></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                {activity.user} <span className="font-normal text-gray-700">{activity.description}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
            </div>
          </li>
        ))}
      </ul>
      </CardContent>
    </Card>
  );
} 