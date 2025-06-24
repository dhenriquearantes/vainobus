import { ArrowLeft, Instagram, Github, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { register as registerUser } from '@/api/register';

const registerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
  cpf: z.string().min(11, 'CPF é obrigatório').max(14, 'CPF inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type RegisterSchema = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async ({ name, email, cpf, password }: RegisterSchema) => {
    try {
      await registerUser({
        name,
        email,
        cpf,
        password,
      });
  
      navigate('/');
    } catch (error) {
      console.error('Register failed:', error);
    }
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Criar nova conta</h2>
              <p className="text-sm text-gray-600">
                Preencha os dados abaixo para se cadastrar
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                  CPF
                </label>
                <input
                  id="cpf"
                  type="text"
                  {...register('cpf')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu CPF"
                  maxLength={14}
                />
                {errors.cpf && (
                  <p className="mt-1 text-sm text-red-600">{errors.cpf.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Sua senha"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar senha
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirme sua senha"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
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