import ActivityPagination from '@/app/(client)/(public)/(main)/_components/activity-pagination';
import CategoryContainer from '@/app/(client)/(public)/(main)/_components/category-container';
import SortDropDown from '@/app/(client)/(public)/(main)/_components/sort-dropdown';
import ActivityList from '@/app/(client)/(public)/(main)/_components/activity-list';
import { getActivityList } from '@/app/data/activities';

interface Props {
  sort: string;
  category: string;
  page: string;
}

export default async function ActicityContainer({ sort, category, page = '1' }: Props) {
  const { activities, totalCount } = await getActivityList({
    sort,
    category,
    page: Number(page),
    size: 12,
  });
  return (
    <div>
      <p className="font-bold text-4xl">🏃‍♂️‍➡️ {category || '전체'}</p>
      <CategoryContainer />
      <SortDropDown />
      <ActivityList list={activities} />
      <ActivityPagination totalCount={totalCount} pageItemCount={12} />
    </div>
  );
}
