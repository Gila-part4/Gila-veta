import { fetcher } from '@/lib/fetcher';
import { ActivityResponse } from '@/type/activities';

interface Props {
  category?: string;
  sort?: string;
  page?: number;
  size: number;
}

// 함수 추가시 삭제 예정
// eslint-disable-next-line import/prefer-default-export
export const getActivities = async ({
  category,
  sort,
  page,
  size,
}: Props): Promise<ActivityResponse> => {
  const query = `?method=offset${category ? `&category=${category}` : ''}${sort ? `&sort=${sort}` : ''}&page=${page}&size=${size}`;
  const data = await fetcher<ActivityResponse>(`/activities${query}`);
  return data;
};
