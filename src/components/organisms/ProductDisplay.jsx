import { ProductPageImages, ProductDisplayDetails } from '@components';

const ProductDisplay = ({ product, loading }) => {
  return (
    <section className="relative flex flex-col md:flex-row gap-8 md:gap-0 lg:gap-16 justify-between">
      <ProductPageImages loading={loading} images={product?.images} />
      <ProductDisplayDetails loading={loading} product={product} />
    </section>
  );
};

export default ProductDisplay;
