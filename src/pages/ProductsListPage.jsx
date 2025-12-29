import { ProductsListTemplate, ListingPageTemplate } from '@templates';
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { productAPI } from '@services';

const defaultPagination = {
  currentPage: 1,
  pageSize: 12,
  totalItems: 0,
  totalPages: 1,
};

const ProductsListPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(defaultPagination);
  const [params, setParams] = useSearchParams();

  const filters = {
    category: categoryName,
    available: params.get('available') || 'in',
    price_min: params.get('price_min') || '',
    price_max: params.get('price_max') || '',
    sort: params.get('sort') || 'featured',
    page: Number(params.get('page') || 1),
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    productAPI
      .fetchByCategory(categoryName, filters)
      .then((res) => {
        setProducts(res?.data?.products || []);
        setPagination(res?.data?.pagination || pagination);
      })
      .catch(() => {
        setProducts([]);
        setPagination(pagination);
      })
      .finally(() => setLoading(false));
  }, [categoryName, params.toString()]);

  return (
    <ListingPageTemplate
      title={
        categoryName
          ? categoryName
              .split('-')
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(' ') + ' | Furniture'
          : 'Products'
      }
    >
      <ProductsListTemplate
        pagination={pagination}
        setParams={setParams}
        products={products}
        loading={loading}
        filters={filters}
        params={params}
      />
    </ListingPageTemplate>
  );
};

export default ProductsListPage;
