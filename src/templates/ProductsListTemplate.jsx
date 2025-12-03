import { ProductsFilter, ProductCard, Heading, ProductCardSkeleton } from '@components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productAPI } from '@services';

const ProductsListTemplate = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();

  const filters = {
    category: categoryName,
    available: params.get('available') === 'true',
    price_min: params.get('price_min') || '',
    price_max: params.get('price_max') || '',
    sort: params.get('sort') || 'featured',
    page: Number(params.get('page') || 1),
  };

  useEffect(() => {
    setLoading(true);
    productAPI
      .fetchAll()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.toString()]);

  return (
    <>
      <ProductsFilter filters={filters} setParams={setParams} />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Heading level={5} variant="tertiary" className="w-full text-center">
          No Products Available
        </Heading>
      )}
    </>
  );
};

export default ProductsListTemplate;
