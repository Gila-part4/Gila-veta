'use server';

import { api } from '@/lib/utils';
import { User } from '@/type/user';

interface Props {
  email: string;
  nickname: string;
  password: string;
}

interface CustomError extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

const register = async ({ email, nickname, password }: Props): Promise<ActionType<User>> => {
  try {
    await api.post('/users', { email, nickname, password });
    return { success: true, message: '성공' };
  } catch (error) {
    const customError = error as CustomError;
    return { success: false, message: customError.response.data.message };
  }
};

export default register;
