import axios from 'axios';
import { api } from '@/lib/utils';

// eslint-disable-next-line import/prefer-default-export
export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<T>(url);
    const { data } = response;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error('Internal Server Error');
  }
};
