import { Review } from '@/type/reviews';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function ReviewItem({ item }: { item: Review }) {
  const createdAt = dayjs(item.createdAt).format('YYYY-MM-DD');

  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 relative bg-slate-400 rounded-full">
        {/* <Image src={item.user.profileImageUrl} alt="유저 이미지" fill /> */}
      </div>
      <div>
        <div className="flex gap-2">
          <p className="text-base">{item.user.nickname}</p>
          <p>|</p>
          <p>{createdAt}</p>
        </div>
        <div>{item.content}</div>
      </div>
    </div>
  );
}
