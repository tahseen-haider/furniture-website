import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openCart } from '@store';

const CartBtn = ({ className = '' }) => {
  const dispatch = useDispatch();

  return (
    <ShoppingCart
      size={26}
      onClick={() => {
        dispatch(openCart());
      }}
      className={`cursor-pointer ${className}`}
    />
  );
};

export default CartBtn;
