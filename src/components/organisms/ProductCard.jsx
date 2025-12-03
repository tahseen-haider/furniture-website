import PropTypes from 'prop-types';
import { Paragraph, Heading, Image } from '@components';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { id, title, price, priceRange, images } = product;

  function slugify(title) {
    if (!title) return;
    return title
      .toString()
      .trim()
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[\s\_]+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  const slug = slugify(title);

  return (
    <Link
      to={`/product/${id}/${slug}`}
      className="overflow-hidden w-full aspect-3/4 flex flex-col gap-3 cursor-pointer group rounded "
    >
      <div className="relative flex-1">
        <Image src={`${images[0]}`} alt="product-image" className="object-cover h-full" />
        <button
          onClickCapture={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute right-2 bottom-2 p-3 
          bg-gray-950 text-white cursor-pointer opacity-0 pointer-events-none rounded
          group-hover:opacity-80 group-hover:pointer-events-auto hover:opacity-100
          transition-opacity duration-300"
        >
          <Plus />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <Heading level={3} variant="title" maxChars={38}>
          {title}
        </Heading>
        <Paragraph variant="H">Rs. {price ?? priceRange}</Paragraph>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
