import { useEffect, useRef, useState } from 'react';
import {
  ProductNavbar,
  ProductDisplay,
  ProductDetails,
  ProductsCarousal,
  ProductHeaderOnScroll,
} from '@components';

const ProductPageTemplate = ({ product, loading }) => {
  const detailsRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (!detailsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(detailsRef.current);
    return () => observer.disconnect();
  }, []);

  const headerProduct = useMemo(
    () => ({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      image: product?.images?.[0],
    }),
    [product]
  );

  return (
    <main className="flex flex-col w-full bg-(--color-surface-300) items-center">
      <div
        className={`
          w-full fixed z-40 transition-all duration-300 ease-out
          ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
        `}
      >
        <ProductHeaderOnScroll product={headerProduct} />
      </div>
      <div className="max-w-480 w-full p-2 lg:p-8 flex flex-col gap-4 relative">
        <ProductNavbar
          loading={loading}
          category={product?.generalCategory}
          productName={product?.title}
        />
        <ProductDisplay loading={loading} product={product} />
        <div ref={detailsRef}>
          <div className="mt-12">
            <ProductDetails product={product} />
          </div>
          <ProductsCarousal title="You may also like" products={product?.relatedProducts} />
        </div>
      </div>
    </main>
  );
};

export default ProductPageTemplate;
