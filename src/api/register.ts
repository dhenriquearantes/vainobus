import { api } from '@/lib/axios'

export interface RegisterRequest {
  name: string
  email: string
  cpf: string
  password: string
}

export interface RegisterResponse {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    tipo_usuario: number;
  };
  token: string;
}

export async function register({
  name,
  email,
  cpf,
  password,
}: RegisterRequest): Promise<RegisterResponse> {
  const response = await api.post('/user/register', {
    name,
    email,
    cpf,
    password,
  })

  return response.data
} 