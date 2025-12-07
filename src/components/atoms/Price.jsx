import { useGlobal } from '@contexts';
import { formatPrice } from '@utils';

const Price = ({ amount }) => {
  const { state } = useGlobal();
  return <span>{formatPrice(amount, state?.currency)}</span>;
};

export default Price;
