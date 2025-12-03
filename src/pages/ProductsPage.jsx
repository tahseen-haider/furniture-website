import { ProductsListTemplate, ListingPageTemplate } from '@templates';

import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { categoryName } = useParams();

  return (
    <ListingPageTemplate
      title={
        categoryName
          .split('-')
          .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
          .join(' ') + ' | Furniture'
      }
    >
      <ProductsListTemplate categoryName={categoryName} />
    </ListingPageTemplate>
  );
};

export default ProductsPage;
