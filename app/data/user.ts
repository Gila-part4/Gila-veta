import { fetcher } from '@/lib/fetcher';
import { User } from '@/type/user';

export const getCurrentUser = async (): Promise<User> => {
  const data = await fetcher<User>('/users/me');
  return data;
};
