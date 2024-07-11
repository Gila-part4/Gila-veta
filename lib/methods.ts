import axios, { AxiosRequestConfig } from 'axios';
import { api } from '@/lib/utils';

export interface APIResponse<T> {
  status: number;
  statusText: string;
  data: T;
}

// eslint-disable-next-line import/prefer-default-export
export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response: APIResponse<T> = await api.get<T>(url, config);
    const { data } = response;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error('알 수 없는 에러입니다.');
  }
};
