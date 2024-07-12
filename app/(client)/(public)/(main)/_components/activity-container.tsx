import { getActivities } from '@/app/data/activities';
import ActivityPagination from './activity-pagination';
import CategoryContainer from './category-container';
import SortDropDown from './sort-dropdown';

interface Props {
  sort: string;
  category: string;
  page: string;
}

export default async function ActicityContainer({ sort, category, page = '1' }: Props) {
  const { activities, totalCount } = await getActivities({
    sort,
    category,
    page: Number(page),
    size: 12,
  });
  return (
    <div>
      <p>{category}</p>
      <CategoryContainer />
      <SortDropDown />
      <ActivityPagination totalCount={totalCount} pageItemCount={12} />
    </div>
  );
}
