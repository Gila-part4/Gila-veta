'use server';

import { fetcher } from '@/lib/fetcher';
import { ActivityDetailResponse, ActivityResponse, AvailableSchedule } from '@/types/activities';

interface Queries {
  keyword?: string;
  category?: string;
  sort?: string;
  page?: number;
  size: number;
}

// 함수 추가시 삭제 예정
// eslint-disable-next-line import/prefer-default-export
export const getActivityList = async ({
  keyword,
  category,
  sort,
  page = 1,
  size,
}: Queries): Promise<ActivityResponse> => {
  const query = `?method=offset${category ? `&category=${category}` : ''}${keyword ? `&keyword=${keyword}` : ''}${sort ? `&sort=${sort}` : ''}&page=${page}&size=${size}`;
  const data = await fetcher<ActivityResponse>(`/activities${query}`);
  return data;
};

export const getActivityItem = async ({
  activityId,
}: {
  activityId: number;
}): Promise<ActivityDetailResponse> => {
  const data = await fetcher<ActivityDetailResponse>(`/activities/${activityId}`);
  return data;
};

export const getAvailableSchedule = async ({
  activityId,
  year,
  month,
}: {
  activityId: number;
  year?: string;
  month?: string;
}): Promise<AvailableSchedule> => {
  const query = `?year=${year}&month=${month}`;
  const data = await fetcher<AvailableSchedule>(
    `/activities/${activityId}/available-schedule${year && month && query}`,
  );
  return data;
};
