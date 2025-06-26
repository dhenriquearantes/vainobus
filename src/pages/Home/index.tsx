import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { getWorkspace } from '@/api/workspace';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/ui/dashboard-layout';
import { StatsCards } from './stats-cards';
import { ChartAlunosViagem } from './chart-viagens';
import { ActionCards } from './action-cards';
import { ActivitiesArea } from './activities-area';

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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-2">
            <ActivitiesArea />
          </div>
          <div className="col-span-1">
            {/* <ActionCards /> */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 