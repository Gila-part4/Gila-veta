import { ActivityItem } from '@/type/activities';
import ActivityCard from './activit-card';

interface Props {
  list: ActivityItem[];
}

export default function ActivityList({ list }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-6">
        {list.map((item) => (
          <ActivityCard activity={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
