import { Home, Calendar, Share2, Bus, Users, UserPlus, BarChart2, FileText, Settings } from "lucide-react";
import logo from '@/assets/logo.svg';
import logoMini from '@/assets/logo.svg';

export function Menu({ open }: { open: boolean }) {
  return (
    <aside className={`fixed top-0 left-0 h-full ${open ? 'w-64' : 'w-16'} bg-white border-r shadow-sm flex flex-col transition-all duration-200 z-30`}>
      <div className={`flex items-center ${open ? 'gap-2 px-6' : 'justify-center px-2'} py-4 border-b relative`}>
        <img
          src={open ? logo : logoMini}
          alt="Logo"
          className={`transition-all object-contain ${open ? 'w-28 h-12' : 'w-10 h-10'}`}
        />
        {open && (
          <div>
            {/* Espaço reservado para nome do sistema, se quiser adicionar */}
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        <div className="mb-4">
          {open && <div className="text-xs text-gray-400 font-semibold mb-2 px-2">Menu Principal</div>}
          <MenuItem icon={<Home className="w-5 h-5" />} label="Dashboard" open={open} />
          <MenuItem icon={<Calendar className="w-5 h-5" />} label="Confirmações" open={open} />
          <MenuItem icon={<Share2 className="w-5 h-5" />} label="Rotas do Dia" open={open} />
        </div>
        <div className="mb-4">
          {open && <div className="text-xs text-gray-400 font-semibold mb-2 px-2">Cadastros</div>}
          <MenuItem icon={<Bus className="w-5 h-5" />} label="Frota de Veículos" subItems={open ? ["Listar Veículos", "Novo Veículo"] : undefined} open={open} />
          <MenuItem icon={<Users className="w-5 h-5" />} label="Motoristas" subItems={open ? ["Listar Motoristas", "Novo Motorista"] : undefined} open={open} />
          <MenuItem icon={<UserPlus className="w-5 h-5" />} label="Alunos" subItems={open ? ["Listar Alunos", "Novo Aluno"] : undefined} open={open} />
        </div>
        <div className="mb-4">
          {open && <div className="text-xs text-gray-400 font-semibold mb-2 px-2">Relatórios</div>}
          <MenuItem icon={<BarChart2 className="w-5 h-5" />} label="Relatórios" open={open} />
          <MenuItem icon={<FileText className="w-5 h-5" />} label="Histórico de Rotas" open={open} />
        </div>
        <div>
          <MenuItem icon={<Settings className="w-5 h-5" />} label="Configurações" open={open} />
        </div>
      </nav>
    </aside>
  );
}

function MenuItem({ icon, label, subItems, open }: { icon: React.ReactNode; label: string; subItems?: string[]; open: boolean }) {
  return (
    <div className="mb-1">
      <div className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700 ${!open ? 'justify-center' : ''}`}>
        {icon}
        {open && <span className="text-sm font-medium">{label}</span>}
      </div>
      {open && subItems && (
        <div className="ml-8 mt-1 flex flex-col gap-1">
          {subItems.map((sub: string, idx: number) => (
            <span key={idx} className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-0.5">{sub}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  // Ícone simples de escudo (pode ser substituído por outro do Lucide se preferir)
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" /></svg>
  );
}
