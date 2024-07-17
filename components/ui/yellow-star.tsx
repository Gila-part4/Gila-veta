import { Star } from 'lucide-react';

interface Props {
  size: number;
}

export default function YellowStart({ size }: Props) {
  return <Star color="#FFC23D" size={size} fill="#FFC23D" />;
}
