import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWorkspace } from '@/api/workspace';
import logo from '../../assets/logo.svg';

export function CreateWorkspacePage() {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      await createWorkspace(name);
      navigate('/home');
    } catch (err: any) {
      setError('Erro ao criar workspace.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img src={logo} alt="Vai no Bus" className="h-12 w-auto mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Criar Workspace</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Workspace</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o nome do workspace"
            required
          />
        </div>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700"
        >
          Criar
        </button>
      </form>
    </div>
  );
} 