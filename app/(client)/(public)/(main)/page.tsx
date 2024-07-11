export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { category } = searchParams as { [key: string]: string };

  const title = category || 'title';
  return (
    <div>
      This is Home
      <p>{title}</p>
    </div>
  );
}
