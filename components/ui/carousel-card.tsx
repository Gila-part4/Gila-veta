'use client';

import * as React from 'react';
import Link from 'next/link';
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
import { getActivities } from '@/app/data/activities';
import CarouselText from '@/components/ui/carousel-text';
import { ActivityItem } from '@/type/activities';

interface Props {
  activities: ActivityItem[];
}

// eslint-disable-next-line import/prefer-default-export
export function CarouselCard({ activities }: Props) {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="m-40"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {activities.map((item) => (
          <CarouselItem key={item.id}>
            <Card>
              <CardContent className="relative p-0">
                <Link href="/" passHref>
                  <div className="w-full h-60">
                    {/* <Image
                      src={item.bannerImageUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full"
                    /> */}
                  </div>
                  <CarouselText
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                  />
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
