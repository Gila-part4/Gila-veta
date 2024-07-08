'use server';

import { api } from '@/lib/utils';
import { AuthResponse } from '@/type/user';
import { cookies } from 'next/headers';

export const login = async (email: string, password: string): Promise<ActionType<AuthResponse>> => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const data = response.data;
    const token = data.accessToken;

    cookies().set('GilaToken', token);
    return { success: true, message: '성공' };
  } catch (error) {
    return { success: false, message: '실패' };
  }
};
