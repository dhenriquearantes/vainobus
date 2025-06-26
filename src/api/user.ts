import { api } from '@/lib/axios';

export async function getUser() {
  const response = await api.get('/user/me');
  return response.data;
}

export async function updateUser(data: { nome: string }) {
  const response = await api.post('/user/me/update', data);
  return response.data;
}