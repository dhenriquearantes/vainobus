import { api } from '@/lib/axios';

export async function getUser() {
  const response = await api.get('/user/me');
  return response.data;
}