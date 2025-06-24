import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { getWorkspace } from '@/api/workspace';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/ui/dashboard-layout';
import { StatsCards } from './stats-cards';
import { ChartAlunosViagem } from './chart-viagens';
import { ActionCards } from './action-cards';

export function HomePage() {
  const navigate = useNavigate();
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  const { data: workspace } = useQuery({
    queryKey: ['workspace'],
    queryFn: () => getWorkspace(),
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl font-bold tracking-tight">          
          Olá, {user?.nome} 👋🏼
        </h1>        
        <StatsCards />
        <div className="w-full">
          <ChartAlunosViagem />
        </div>
        <ActionCards />
      </div>
    </DashboardLayout>
  );
} 