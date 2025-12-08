import { formatPrice } from '@utils';
import { useSelector } from 'react-redux';

const Price = ({ amount }) => {
  const currency = useSelector((state) => state.global.currency);
  return <span>{formatPrice(amount, currency)}</span>;
};

export default Price;
