'use server';

import { api } from '@/lib/utils';
import { User } from '@/type/user';
import axios from 'axios';

interface Props {
  email: string;
  nickname: string;
  password: string;
}

const register = async ({ email, nickname, password }: Props): Promise<ActionType<User>> => {
  try {
    await api.post('/users', { email, nickname, password });
    return { success: true, message: '성공' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: '회원가입 실패' };
  }
};

export default register;
