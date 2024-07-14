import { getActivities } from '@/app/data/activities';
import { CarouselCard } from './carousel-card';

interface Props {
  sort: string;
  category: string;
  page: string;
}

export default async function MainCarousel() {
  const { activities } = await getActivities({
    sort: 'most_reviewed',
    page: 1,
    size: 6,
  });

  console.log(activities);

  return <CarouselCard activities={activities} />;
}
