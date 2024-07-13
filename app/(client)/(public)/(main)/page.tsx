/* eslint-disable prettier/prettier */
import { MainCarousel } from '@/components/ui/main-carousel';
import { getActivities } from '@/data/activitie';

export default async function Page() {
  const data = await getActivities();

  return <MainCarousel activities={data.activities} />;
}
