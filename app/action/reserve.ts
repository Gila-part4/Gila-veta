'use server';

import { api } from '@/lib/utils';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const reserve = async ({
  activityId,
  scheduleId,
  headCount,
}: {
  activityId: number;
  scheduleId: number;
  headCount: number;
}) => {
  try {
    await api.post(`/activities/${activityId}/reservations`, { scheduleId, headCount });

    return { success: true, message: '예약에 성공했습니다!' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: 'Internal Server Error' };
  }
};
