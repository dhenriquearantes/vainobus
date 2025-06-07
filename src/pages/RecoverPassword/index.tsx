import { useState } from 'react';
import { ArrowLeft, Instagram, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function RecoverPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full bg-white flex flex-col">
        <div className="p-8 pb-0 flex items-center justify-between">
          <img src={logo} alt="Vai no Bus" className="h-12 w-auto" />
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Instagram className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Github className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Mail className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Recuperar Senha</h2>
              <p className="text-sm text-gray-600">
                Digite seu e-mail para receber as instruções de recuperação
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-30"
              >
                Enviar instruções
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Voltar para o login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 