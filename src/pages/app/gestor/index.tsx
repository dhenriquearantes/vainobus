import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { GestorLayout } from '@/components/ui/gestor-layout';
import { StatsCards } from '@/pages/Home/stats-cards';
import { ChartAlunosViagem } from '@/pages/Home/chart-viagens';
import { ActivitiesArea } from '@/pages/Home/activities-area';

export function GestorPage() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  return (
    <GestorLayout>
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
    </GestorLayout>
  );
} 