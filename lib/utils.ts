import { getAccessToken } from '@/app/action/token';
import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/5-4',
});

try {
  api.interceptors.request.use(
    async (config) => {
      const token = await getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
} catch (error) {}
