import { api } from '@/lib/utils';

// eslint-disable-next-line import/prefer-default-export
export const getActivities = async () => {
  try {
    const response = await api.get('/activities?method=offset&page=1&size=6');
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('error');
  }
};
