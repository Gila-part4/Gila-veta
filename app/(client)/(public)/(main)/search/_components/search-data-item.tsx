import React from 'react';

interface Props {
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
}
export default function SearchDataItem({ title, description, category, price, address }: Props) {
  return (
    <div className="border-4 rounded-lg border-sky-600">
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>{price}</div>
      <div>{address}</div>
    </div>
  );
}
