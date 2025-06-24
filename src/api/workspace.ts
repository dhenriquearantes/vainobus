import { api } from '@/lib/axios';

export interface Workspace {
  id: string;
  name: string;
}


export async function getWorkspace(): Promise<Workspace | null> {
  try {
    const response = await api.get('/workspace/me');
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
} 

export async function createWorkspace(name: string) {
  try {
    const response = await api.post('/workspace/create', { name });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      throw new Error('Workspace já existe');
    }
    throw error;
  }
}