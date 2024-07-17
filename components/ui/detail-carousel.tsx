'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { SubImage } from '@/type/activities';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Props {
  subImages: SubImage[];
}

// eslint-disable-next-line import/prefer-default-export
export function DetailCarousel({ subImages }: Props) {
  return (
    <Carousel
      className="mt-9 mb-9"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {subImages.map(({ id, imageUrl }) => (
          <CarouselItem key={id}>
            <Card>
              <CardContent className="relative p-0">
                <div className="w-full h-96">
                  {/* <Image src={imageUrl} alt="이미지" fill /> */}
                </div>
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
