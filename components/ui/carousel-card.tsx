'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { ActivityItem } from '@/type/activities';

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
        {activities.map(({ id, title, price, rating, reviewCount, bannerImageUrl }) => (
          <CarouselItem key={id}>
            <Card>
              <CardContent className="relative p-0">
                <Link href={`/${id}`} passHref>
                  <div className="w-full h-60">
                    {/* <Image
                      src={bannerImageUrl}
                      alt={title}
                      fill
                      className="object-cover w-full h-full"
                    /> */}
                  </div>
                  <CarouselText
                    title={title}
                    price={price}
                    rating={rating}
                    reviewCount={reviewCount}
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
