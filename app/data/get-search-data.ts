'use server';

import { api } from '@/lib/utils';
import axios from 'axios';

interface Props {
  page: number;
  keyword: null | string;
}
// eslint-disable-next-line import/prefer-default-export
export const getSearchData = async ({ page, keyword }: Props) => {
  try {
    const response = await api.get(
      `/activities?method=offset&keyword=${keyword}&page=${page}&size=10`,
    );
    const { activities } = response.data;
    return activities;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error(`${error} 데이터를 가져오지 못했습니다.`);
  }
};
