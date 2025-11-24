import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

export default function ProductCard({ product }) {
  const { name, price, image, description } = product;

  console.log(image);
  return (
    <div className="border border-(--text-tertiary) rounded-lg overflow-hidden">
      <Image src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <Heading variant="tertiary" className="text-lg font-semibold">
          {name}
        </Heading>
        <Paragraph variant="F" className="text-gray-500">
          ${price.toFixed(2)}
        </Paragraph>
        <Paragraph variant="F" className="text-sm text-gray-600 my-2">
          {description}
        </Paragraph>
        <Button rounded className="text-white">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
