import { BWButton, Image, Divider, Price } from '@components';

const ProductHeaderOnScroll = ({ show, product }) => {
  const { id, title, price, image } = product || {};

  if (!product) return null;

  return (
    <>
      <div className="w-full bg-(--color-surface-300) py-2 px-2 sm:px-4 max-w-480">
        <div className="px-4 mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={image}
              alt={title}
              className="w-12 h-12 object-cover border-2 border-gray-300"
            />

            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base line-clamp-1">{title}</span>

              {price && <Price amount={price} />}
            </div>
          </div>

          <BWButton
            text="ADD TO CART"
            onClick={() => console.log('Add to cart:', id)}
            className="max-w-40"
          />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ProductHeaderOnScroll;
