'use server';

import { api } from '@/lib/utils';
import { User } from '@/type/user';

export const editProfile = async ({
  nickname,
  newPassword,
  formData,
}: {
  nickname?: string;
  newPassword?: string;
  formData?: FormData;
}): Promise<ActionType<User>> => {
  try {
    const image = formData?.get('image');
    let profileImageUrl;
    if (image) {
      const response = await api.post('/users/me/image', formData);
      const { data } = response;
      profileImageUrl = data.profileImageUrl;
    }
    const response = await api.patch<User>('/users/me', {
      nickname,
      newPassword,
      profileImageUrl,
    });

    const data = response.data;
    return { success: true, message: '회원정보 수정에 성공하였습니다', data };
  } catch (error) {
    console.log(error);
    return { success: false, message: '회원정보 수정에 실패하였습니다.' };
  }
};
