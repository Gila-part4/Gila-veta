import SearchDataList from '@/app/(client)/(public)/search/_components/search-data-list';
import { getActivities } from '@/app/data/activities';

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { keyword } = searchParams as { [key: string]: string };
  const { activities } = await getActivities({ keyword, size: 10, page: 1 });

  return (
    <div className="p-4">
      <SearchDataList searchData={activities} keyword={keyword} />
    </div>
  );
}
