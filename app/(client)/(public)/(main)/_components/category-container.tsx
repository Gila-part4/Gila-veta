import { categories } from '@/constants';
import CategoryButton from './category-button';

export default function CategoryContainer() {
  return (
    <div className="flex">
      {categories.map((item) => (
        <CategoryButton item={item} key={item} />
      ))}
    </div>
  );
}
