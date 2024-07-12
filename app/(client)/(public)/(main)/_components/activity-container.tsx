'use client';

import { useSearchParams } from 'next/navigation';
import ActivityPagination from './activity-pagination';
import CategoryContainer from './category-container';
import SortDropDown from './sort-dropdown';

export default function ActicityContainer() {
  const searchParams = useSearchParams();
  const title = searchParams.get('category') || '전체';

  return (
    <div>
      <p>{title}</p>
      <CategoryContainer />
      <SortDropDown />
      <ActivityPagination totalCount={120} pageItemCount={12} />
    </div>
  );
}
