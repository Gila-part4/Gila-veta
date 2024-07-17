import YellowStart from '@/components/ui/yellow-star';
import { Review } from '@/type/reviews';
import dayjs from 'dayjs';

export default function ReviewItem({ item }: { item: Review }) {
  const createdAt = dayjs(item.createdAt).format('YYYY-MM-DD');

  return (
    <li className="flex gap-4 min-h-20 py-6 border-b-2 max-w-[790px] px-5">
      <div className="h-11 w-11 relative bg-slate-400 rounded-full">
        {/* <Image src={item.user.profileImageUrl} alt="유저 이미지" fill /> */}
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 items-center">
          <p className="text-base font-semibold">{item.user.nickname}</p>
          <p>|</p>
          <div className="flex items-center gap-1">
            <YellowStart size={15} />
            {item.rating}
          </div>
          <p className="text-xs text-end text-slate-500">{createdAt}</p>
        </div>
        <div className="break-all w-[500px] ">{item.content}</div>
      </div>
    </li>
  );
}
