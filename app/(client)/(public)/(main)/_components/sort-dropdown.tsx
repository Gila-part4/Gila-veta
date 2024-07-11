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
  const [position, setPosition] = useState('new');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleDropdown = (sortvalue: string) => {
    const newSortParams = new URLSearchParams(searchParams.toString());
    if (searchParams.get('sort')) {
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
          <DropdownMenuRadioItem value="new" onClick={() => handleDropdown('new')}>
            최신순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceAsc" onClick={() => handleDropdown('priceAsc')}>
            가격 높은 순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceDesc" onClick={() => handleDropdown('priceDesc')}>
            가격 낮은 순
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
