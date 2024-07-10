import { authOption } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { getServerSession } from 'next-auth';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/5-4',
});

try {
  api.interceptors.request.use(
    async (config) => {
      // nextauth 서버 세션에 저장된 토큰값 가져오기
      const token = await getServerSession(authOption);
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
} catch (error) {
  /* empty */
}
