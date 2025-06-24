import React, { useState } from 'react';
import {
  LayoutDashboard,
  CalendarCheck,
  Route,
  Bus,
  Users,
  UserRound,
  BarChart2,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import logo from '@/assets/logo.svg';

interface MenuProps {
  collapsed?: boolean;
}

export function Menu({ collapsed }: MenuProps) {
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-semibold text-gray-400 px-4 mt-4 mb-1 select-none whitespace-nowrap block">
      {children}
    </span>
  );

  const SubItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center">
      <div className="h-6 border-l border-gray-200 ml-5 mr-2" />
      <span className="text-gray-500 text-xs font-normal whitespace-nowrap">{children}</span>
    </div>
  );

  const [openFrota, setOpenFrota] = useState(false);
  const [openMotoristas, setOpenMotoristas] = useState(false);
  const [openAlunos, setOpenAlunos] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-30 transition-all duration-700 flex flex-col">
      <div className="flex border-b px-4 transition-all duration-700 h-16 items-center justify-start">
        <img
          src={logo}
          alt="Vai no Bus"
          className="h-12 w-auto hover:cursor-pointer transition-all duration-700"
        />
      </div>
      <nav className="flex-1 flex flex-col gap-1 p-2">
        <SectionTitle>Menu Principal</SectionTitle>
        <a href="#" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group">
          <LayoutDashboard size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1">Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group">
          <CalendarCheck size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1">Confirmações</span>
        </a>
        <a href="#" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group">
          <Route size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1">Rotas do Dia</span>
        </a>

        {/* Cadastros */}
        <SectionTitle>Cadastros</SectionTitle>
        {/* Frota de Veículos */}
        <button
          type="button"
          className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group w-full text-left"
          onClick={() => setOpenFrota((prev) => !prev)}
        >
          <Bus size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1 flex-1">Frota de Veículos</span>
          {openFrota ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
        </button>
        {openFrota && (
          <div className="ml-2 flex flex-col gap-1">
            <SubItem>Listar Veículos</SubItem>
            <SubItem>Novo Veículo</SubItem>
          </div>
        )}
        {/* Motoristas */}
        <button
          type="button"
          className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group w-full text-left"
          onClick={() => setOpenMotoristas((prev) => !prev)}
        >
          <Users size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1 flex-1">Motoristas</span>
          {openMotoristas ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
        </button>
        {openMotoristas && (
          <div className="ml-2 flex flex-col gap-1">
            <SubItem>Listar Motoristas</SubItem>
            <SubItem>Novo Motorista</SubItem>
          </div>
        )}
        {/* Alunos */}
        <button
          type="button"
          className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group w-full text-left"
          onClick={() => setOpenAlunos((prev) => !prev)}
        >
          <UserRound size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1 flex-1">Alunos</span>
          {openAlunos ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
        </button>
        {openAlunos && (
          <div className="ml-2 flex flex-col gap-1">
            <SubItem>Listar Alunos</SubItem>
            <SubItem>Novo Aluno</SubItem>
          </div>
        )}

        {/* Relatórios */}
        <SectionTitle>Relatórios</SectionTitle>
        <a href="#" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-100 transition-colors group">
          <BarChart2 size={16} className="text-gray-600" />
          <span className="text-gray-800 font-medium text-sm transition-all duration-700 overflow-hidden whitespace-nowrap block ml-1">Relatórios</span>
        </a>
      </nav>
    </aside>
  );
}
