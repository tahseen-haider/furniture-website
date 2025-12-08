import { useDispatch, useSelector } from 'react-redux';
import { SideBarOverlay } from '@components';
import { toggleCart } from '@store';

const CartSidebar = () => {
  const cartOpen = useSelector((state) => state.global.cartOpen);
  const dispatch = useDispatch();

  return (
    <SideBarOverlay
      isOpen={cartOpen}
      onClose={() => {
        dispatch(toggleCart());
      }}
      side="right"
    >
      Cart
    </SideBarOverlay>
  );
};

export default CartSidebar;
