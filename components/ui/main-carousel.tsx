'use client';

import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ActivityItem } from '@/type/activities';
import Link from 'next/link';
import CarouselText from './carousel-text';

interface Props {
  activities: ActivityItem[];
}

// eslint-disable-next-line import/prefer-default-export
export function MainCarousel({ activities }: Props) {
  // 리뷰 순으로 상위 6개 항목 정렬
  const sortedData = activities.sort((a, b) => b.reviewCount - a.reviewCount);
  const top6Data = sortedData.slice(0, 6);
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="m-40"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {top6Data.map((item) => (
          <CarouselItem key={item.id}>
            <Card>
              <CardContent className="p-0">
                <Link href="/" passHref>
                  <div className="relative w-full h-60">
                    {/* <Image
                      src={item.bannerImageUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full"
                    /> */}
                  </div>
                  <CarouselText item={item} />
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
