'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { createUrl } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SortDropDown() {
  const searchParams = useSearchParams();
  const listSortedValue = searchParams.get('sort');
  const [position, setPosition] = useState(listSortedValue || 'latest');
  const router = useRouter();

  const handleDropdown = (sortvalue: string) => {
    const newSortParams = new URLSearchParams(searchParams.toString());
    if (sortvalue === 'latest') {
      newSortParams.delete('sort');
    } else {
      newSortParams.set('sort', sortvalue);
    }
    router.push(createUrl('/', newSortParams));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">필터</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>정렬 방법</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="latest" onClick={() => handleDropdown('latest')}>
            최신순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="most_reviewed"
            onClick={() => handleDropdown('most_reviewed')}
          >
            리뷰 많은 순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price_asc" onClick={() => handleDropdown('price_asc')}>
            가격 낮은 순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price_desc" onClick={() => handleDropdown('price_desc')}>
            가격 높은 순
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
