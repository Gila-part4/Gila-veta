'use client';

import React, { useEffect, useState, useRef, useTransition, useCallback } from 'react';
import SearchDataItem from '@/app/(client)/(public)/(main)/search/_components/search-data-item';
import { ActivityItem } from '@/type/activities';
import { getActivitieList } from '@/app/data/activities';

interface Props {
  searchData: ActivityItem[];
  keyword: string;
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
      const { activities } = await getActivitieList({ page, keyword, size: 10 });
      if (activities && activities.length > 0) {
        setSearchDataList((prevData) => [...prevData, ...activities]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    });
  }, [isPending, page, keyword]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPending && hasMore) {
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
        {searchDataList.map((data) => (
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
