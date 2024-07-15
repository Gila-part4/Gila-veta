import { api } from '@/lib/utils';
import { User } from '@/type/user';

export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await api.get<User>('/users/me');
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error('실패');
  }
};
