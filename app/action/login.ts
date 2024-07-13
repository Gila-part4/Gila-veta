'use server';

import { api } from '@/lib/utils';
import { AuthResponse } from '@/type/user';
import axios from 'axios';
import { cookies } from 'next/headers';

const login = async (email: string, password: string): Promise<ActionType<AuthResponse>> => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { data } = response;
    const token = data.accessToken;

    cookies().set('GilaToken', token);
    return { success: true, message: '성공' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: '로그인 실패' };
  }
};

export default login;
