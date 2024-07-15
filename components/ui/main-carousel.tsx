import { getActivities } from '@/app/data/activities';
import { CarouselCard } from './carousel-card';

export default async function MainCarousel() {
  const { activities } = await getActivities({
    sort: 'most_reviewed',
    page: 1,
    size: 6,
  });

  return <CarouselCard activities={activities} />;
}
