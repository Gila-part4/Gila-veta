import { CATEGORIES } from '@/constants';
import CategoryButton from '@/app/(client)/(public)/(main)/_components/category-button';
import TotalCategoryButton from '@/app/(client)/(public)/(main)/_components/total-category-button';

export default function CategoryContainer() {
  return (
    <div className="flex">
      <TotalCategoryButton />
      {CATEGORIES.map((item) => (
        <CategoryButton item={item} key={item} />
      ))}
    </div>
  );
}
