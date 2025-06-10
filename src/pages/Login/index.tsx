import { useState } from 'react';
import { Eye, EyeOff, Instagram, Github, Mail } from 'lucide-react';
import roadImage from '../../assets/road.jpeg';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { signIn } from '@/api/sign-in';
import { useForm } from 'react-hook-form';    
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  login: z.string().min(1, 'CPF ou E-mail é obrigatório'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await signIn(data);
      localStorage.setItem('token', response.token);
      
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        <div className="p-8 pb-0 flex items-center justify-between">
          <img src={logo} alt="Vai no Bus" className="h-12 w-auto" />
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Instagram className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => window.open('https://github.com/dhenriquearantes/vainobus', '_blank')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Bem-vindo(a)!</h2>
              <p className="text-sm text-gray-600">
                Por favor, insira seus dados.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-1">
                  CPF ou E-mail
                </label>
                <input
                  type="text"
                  id="login"
                  {...register('login')}
                  placeholder="CPF ou E-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.login && (
                  <p className="mt-1 text-sm text-red-600">{errors.login.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    {...register('password')}
                    placeholder="Senha..."
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>

              <button
                type="button"
                onClick={() => navigate('/register')}
                className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 flex items-center justify-center space-x-2"
              >
                Criar conta
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Esqueceu a Senha ?{' '}
                <button onClick={() => navigate('/recuperar-senha')} className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Clique Aqui!
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${roadImage})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative h-full flex flex-col justify-end p-12 text-white">
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-4">Frota Escolar</h3>
            <p className="text-lg leading-relaxed opacity-90 max-w-md">
              Organize, monitore e otimize o transporte dos alunos de forma eficiente, segura e prática. Tenha controle total sobre rotas, veículos e horários.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 