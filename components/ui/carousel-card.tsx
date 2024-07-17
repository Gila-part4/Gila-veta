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
import CarouselText from '@/components/ui/carousel-text';
import { ActivityItem } from '@/types/activities';

interface Props {
  activities: ActivityItem[];
}

// eslint-disable-next-line import/prefer-default-export
export function CarouselCard({ activities }: Props) {
  return (
    <Carousel
      className="m-40"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
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
