import { getSearchData } from '@/app/data/get-search-data';
import SearchDataList from '@/app/(client)/(public)/search/_components/search-data-list';

export interface SearchData {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

interface PageProps {
  searchParams: {
    keyword: string | null;
  };
}

export default async function Page({ searchParams: { keyword } }: PageProps) {
  const searchData: SearchData[] = await getSearchData({ page: 1, keyword });

  return (
    <div className="p-4">
      <SearchDataList searchData={searchData} keyword={keyword} />
    </div>
  );
}
