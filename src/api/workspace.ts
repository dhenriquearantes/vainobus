import { api } from '@/lib/axios';

export interface Workspace {
  id: string;
  name: string;
}

export async function getWorkspaceByUser(): Promise<Workspace | null> {
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