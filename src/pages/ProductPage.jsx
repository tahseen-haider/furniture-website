import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productAPI } from '@services';

const ProductPage = () => {
  const [details, setDetails] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    productAPI.fetchById(productId).then((res) => {
      setDetails(res?.product);
    });
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
