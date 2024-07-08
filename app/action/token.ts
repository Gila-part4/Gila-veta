'use server';

import { cookies } from 'next/headers';

export const getAccessToken = async (): Promise<string | null> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('GilaToken');

  if (!accessToken) return null;

  return accessToken.value;
};
