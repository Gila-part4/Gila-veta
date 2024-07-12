import { fetcher } from '@/lib/fetcher';
import { ActivityData } from '../(client)/(public)/(main)/page';

// 함수 추가시 삭제 예정
// eslint-disable-next-line import/prefer-default-export
export const getActivities = async (): Promise<ActivityData> => {
  const data = await fetcher<ActivityData>('/activities?method=offset');
  return data;
};
