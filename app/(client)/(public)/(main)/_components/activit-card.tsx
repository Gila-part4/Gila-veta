import { ActivityItem } from '@/types/activities';
import Link from 'next/link';

interface Props {
  activity: ActivityItem;
}

export default function ActivityCard({ activity }: Props) {
  return (
    <Link href="/detail">
      <div className="flex flex-col w-[283px] gap-3.5">
        <div className="w-[283px] h-[283px] relative rounded-[20px] bg-slate-200">
          {/* <Image src={activity.bannerImageUrl} alt="액티비티 사진" fill /> */}
        </div>
        <div className="flex flex-col items-start w-full gap-3.5">
          <div className="flex gap-1.5">
            <p className="text-base">⭐️</p>
            <p>
              {activity.rating} {`(${activity.reviewCount})`}
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl">{activity.title}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <p className="text-2xl font-bold">₩ {activity.price}</p>
            <p className="text-xl">/ 인</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
