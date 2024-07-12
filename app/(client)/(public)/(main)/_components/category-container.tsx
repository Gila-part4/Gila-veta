import { CATEGORIES } from '@/constants';
import CategoryButton from './category-button';

export default function CategoryContainer() {
  return (
    <div className="flex">
      {CATEGORIES.map((item) => (
        <CategoryButton item={item} key={item} />
      ))}
    </div>
  );
}
