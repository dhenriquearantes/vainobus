import { getUser } from '@/api/user';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

export function PersonalDataCard({ mockAluno }: { mockAluno: any }) {
  const dadosPessoais = {
    nome: 'João Silva Santos',
    matricula: '202200234',
    email: 'aluno@email.com',
    telefone: '(11) 98765-4321',
    instituicao: '',
    serie: '3º Ano do Ensino Médio',
    endereco: 'Rua das Flores, 123 - Centro',
    responsavel: 'Maria Silva',
    telefoneResponsavel: '(11) 91234-5678',
    dataNascimento: '15/03/2007',
  };

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  return (
    <div className="relative w-full bg-white rounded-xl shadow-sm p-6 min-h-[120px]">
      <h2 className="text-base font-semibold mb-6">Dados Pessoais</h2>
      <Button className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded" size="sm">
        Atualizar Dados
      </Button>
      <div className="grid grid-cols-2 gap-x-32 gap-y-6">
        <div>
          <div className="text-xs text-gray-600 mb-1">Nome Completo</div>
          <div className="text-sm font-medium text-gray-800">{user?.nome}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Matrícula</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.matricula}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">E-mail</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.email}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Telefone</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.telefone}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Instituição de Ensino</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.instituicao}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Série</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.serie}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Endereço</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.endereco}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Data de Nascimento</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.dataNascimento}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Responsável</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.responsavel}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Telefone do Responsável</div>
          <div className="text-sm font-medium text-gray-800">{mockAluno.telefoneResponsavel}</div>
        </div>
      </div>
    </div>
  );
} 