import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { GestorPage } from '../app/gestor';
import { MotoristaPage } from '../app/motorista';
import { AlunoPage } from '../app/aluno';


export function HomePage() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  const typeUser = {
    '1': <GestorPage />,
    '2': <AlunoPage />,
    '3': <MotoristaPage />,
  }

  const Page = typeUser[user?.id_tipo_usuario as keyof typeof typeUser];

  return (
    <div>
      {Page}
    </div>
  );
} 