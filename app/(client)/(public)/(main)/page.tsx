import MainCarousel from '@/components/ui/main-carousel';
import ActicityContainer from '@/app/(client)/(public)/(main)/_components/activity-container';

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, category, page } = searchParams as { [key: string]: string };

  return (
    <div>
      <MainCarousel />
      <ActicityContainer sort={sort} category={category} page={page} />
    </div>
  );
}
