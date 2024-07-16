import { Review } from '@/type/reviews';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function ReviewItem({ item }: { item: Review }) {
  const createdAt = dayjs(item.createdAt).format('YYYY-MM-DD');

  return (
    <div className="flex gap-4 min-h-20 py-6 border-b-2 max-w-[790px] px-5">
      <div className="h-11 w-11 relative bg-slate-400 rounded-full">
        {/* <Image src={item.user.profileImageUrl} alt="유저 이미지" fill /> */}
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2">
          <p className="text-base font-semibold">{item.user.nickname}</p>
          <p>|</p>
          <p className="text-sm leading-6 text-slate-500">{createdAt}</p>
        </div>
        <div className="break-all w-[500px] ">{item.content}</div>
      </div>
    </div>
  );
}
