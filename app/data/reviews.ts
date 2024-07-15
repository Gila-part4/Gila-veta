import { fetcher } from '@/lib/fetcher';
import { ReviewResponse } from '@/type/reviews';

interface Props {
  page: number;
  size: number;
  activityId: number;
}

// 함수 추가시 삭제 예정
// eslint-disable-next-line import/prefer-default-export
export const getReviews = async ({
  page = 1,
  size,
  activityId,
}: Props): Promise<ReviewResponse> => {
  const query = `?page=${page}&size=${size}`;
  const data = await fetcher<ReviewResponse>(`/activities/${activityId}/reviews${query}`);
  return data;
};
