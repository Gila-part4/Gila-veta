import ActicityContainer from './_components/activity-container';

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, category, page } = searchParams as { [key: string]: string };

  return (
    <div>
      This is Home
      <ActicityContainer sort={sort} category={category} page={page} />
    </div>
  );
}
