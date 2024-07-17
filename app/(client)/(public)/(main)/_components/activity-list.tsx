import { ActivityItem } from '@/types/activities';
import ActivityCard from '@/app/(client)/(public)/(main)/_components/activit-card';

interface Props {
  list: ActivityItem[];
}

export default function ActivityList({ list }: Props) {
  return (
    <div className="flex items-center justify-center">
      {list[0] ? (
        <div className="grid grid-cols-4 gap-6">
          {list.map((item) => (
            <ActivityCard activity={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="h-96 flex flex-col items-center justify-center">아무것도 없음</div>
      )}
    </div>
  );
}
