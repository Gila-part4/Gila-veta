import { fetcher } from '@/lib/fetcher';
import { DetailActivity } from '@/type/activities';

interface ActivityParams {
  activityId: number;
}

// eslint-disable-next-line import/prefer-default-export
export const getActivityDetail = async ({ activityId }: ActivityParams) => {
  const data = await fetcher<DetailActivity>(`/activities/${activityId}`);
  return data;
};
