import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { getWorkspaceByUser } from '@/api/workspace';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';

export function HomePage() {
  const navigate = useNavigate();
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  const { data: workspace } = useQuery({
    queryKey: ['workspace'],
    queryFn: () => getWorkspaceByUser(),
  });

  // if (!workspace) {
  //   navigate('/create-workspace');
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
    </div>
  );
} 