import { api } from '@/lib/axios'

export interface SignInRequest {
  login: string
  password: string
}

export interface SignInResponse {
  data: string
}

export async function signIn({
  login,
  password,
}: SignInRequest): Promise<SignInResponse> {
  const response = await api.post('/user/signIn', {
    login,
    password,
  })

  return response.data
}
