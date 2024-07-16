'use client';

import { mockData } from '@/app/data/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Review } from '@/type/reviews';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { getReviews } from '@/app/data/reviews';
import ReviewItem from './review-item';

interface Props {
  totalCount: number;
  list: Review[];
  activityId: string;
}

export default function ReviewModal({ totalCount, list, activityId }: Props) {
  const [reviewList, setReviewList] = useState(list);
  const [isPending, startTransition] = useTransition();
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMoreData = useCallback(async () => {
    if (isPending) return; // 이미 로딩 중이면 아무 작업도 하지 않음

    startTransition(async () => {
      const { reviews } = await getReviews({ page, size: 4, activityId: Number(activityId) });
      if (reviews && reviews.length > 0) {
        setReviewList((prevData) => [...prevData, ...reviews]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    });
  }, [activityId, isPending, page]);

  useEffect(() => {
    if (totalCount >= list.length) {
      return () => null;
    }
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
  }, [hasMore, loaderRef, isPending, loadMoreData, totalCount, list.length]);

  const mock = mockData;

  return (
    <Dialog>
      <DialogTrigger className="w-52 py-3 border rounded-md">모든 리뷰보기</DialogTrigger>
      <DialogContent className="w-fit">
        <div className="flex">
          <div className="w-40 pr-6 flex flex-col justify-center items-center">
            <DialogHeader className="flex flex-col justify-center items-center">
              <p className="text-7xl">⭐️</p>
              <DialogTitle className="text-7xl">{mock.averageRating}</DialogTitle>
            </DialogHeader>
          </div>
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-xl">후기 {totalCount}개</DialogTitle>
            <div className="overflow-y-scroll h-96">
              {mock.reviews.map((item) => (
                <ReviewItem key={item.id} item={item} />
              ))}
              <div ref={loaderRef} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
