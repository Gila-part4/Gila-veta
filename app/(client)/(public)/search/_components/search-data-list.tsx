'use client';

import React, { useEffect, useState, useRef, useTransition, useCallback } from 'react';
import { getSearchData } from '@/app/data/get-search-data';
import { SearchData } from '@/app/(client)/(public)/search/page';
import SearchDataItem from '@/app/(client)/(public)/search/_components/search-data-item';

interface Props {
  searchData: SearchData[];
  keyword: string | null;
}

export default function SearchDataList({ searchData, keyword }: Props) {
  const [searchDataList, setSearchDataList] = useState(searchData);
  const [isPending, startTransition] = useTransition();
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMoreData = useCallback(async () => {
    if (isPending) return; // 이미 로딩 중이면 아무 작업도 하지 않음

    startTransition(async () => {
      const newData = await getSearchData({ page, keyword });
      if (newData && newData.length > 0) {
        setSearchDataList((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    });
  }, [isPending, page, keyword]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isPending && hasMore) {
          loadMoreData();
        }
      },
      { threshold: 1 },
    );

    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [hasMore, loaderRef, keyword, isPending, loadMoreData]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {searchDataList.map((data: SearchData) => (
          <SearchDataItem
            key={data.id}
            title={data.title}
            description={data.description}
            category={data.category}
            price={data.price}
            address={data.address}
          />
        ))}
        {isPending && <div>Loading...</div>}
        <div ref={loaderRef} />
      </div>
    </div>
  );
}
