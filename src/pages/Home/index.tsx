import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { getWorkspace } from '@/api/workspace';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/ui/dashboard-layout';

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
      <div className="min-h-screen bg-gray-100">
      </div>
    </DashboardLayout>
  );
} 