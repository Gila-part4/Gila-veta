'use server';

import { fetcher } from '@/lib/fetcher';
import { ActivityResponse } from '@/types/activities';

interface Props {
  keyword?: string;
  category?: string;
  sort?: string;
  page?: number;
  size: number;
}

// 함수 추가시 삭제 예정
// eslint-disable-next-line import/prefer-default-export
export const getActivities = async ({
  keyword,
  category,
  sort,
  page = 1,
  size,
}: Props): Promise<ActivityResponse> => {
  const query = `?method=offset${category ? `&category=${category}` : ''}${keyword ? `&keyword=${keyword}` : ''}${sort ? `&sort=${sort}` : ''}&page=${page}&size=${size}`;
  const data = await fetcher<ActivityResponse>(`/activities${query}`);
  return data;
};
