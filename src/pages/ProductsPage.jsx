import { useEffect, useState } from 'react';
import ProductsPageTemplate from '@/templates/ProductPageTemplate';
import { productAPI } from '@/services';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productAPI.fetchAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading products...</div>;

  return <ProductsPageTemplate products={products} />;
};

export default ProductsPage;
