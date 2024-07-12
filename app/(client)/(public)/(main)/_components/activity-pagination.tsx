'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { createUrl } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

interface Props {
  totalCount: number;
  pageItemCount: number;
}

export default function ActivityPagination({ totalCount, pageItemCount }: Props) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = Math.ceil(totalCount / pageItemCount);
  const prevPageParams = new URLSearchParams(searchParams.toString());
  prevPageParams.set('page', String(prevPage));
  const nextParams = new URLSearchParams(searchParams.toString());
  nextParams.set('page', String(nextPage));

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={currentPage === 1 ? '' : createUrl('/', prevPageParams)} />
        </PaginationItem>
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink href={createUrl('/', prevPageParams)}>{prevPage}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive href="#">
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {lastPage !== currentPage && (
          <PaginationItem>
            <PaginationLink href={createUrl('/', nextParams)}>{nextPage}</PaginationLink>
          </PaginationItem>
        )}
        {lastPage - 1 > currentPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext href={currentPage === lastPage ? '' : createUrl('/', nextParams)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
