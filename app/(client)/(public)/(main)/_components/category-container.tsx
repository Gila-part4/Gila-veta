import { CATEGORIES } from '@/constants';
import CategoryButton from './category-button';
import TotalCategoryButton from './total-category-button';

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
