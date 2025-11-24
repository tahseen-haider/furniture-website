import { useEffect, useState } from 'react';
import ProductsPageTemplate from '../templates/ProductPageTemplate';
import { getAllProducts } from '../services/api/products';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading products...</div>;

  return <ProductsPageTemplate products={products} />;
}
