import PropTypes from 'prop-types';
import { BWButton } from '@components';
import { Plus } from 'lucide-react';

const AddToCartButton = ({
  type = 'text',
  product = {},
  quantity = 1,
  className = '',
  ...props
}) => {
  return (
    <BWButton
      type={type}
      icon={type === 'icon' ? <Plus /> : null}
      text="ADD TO CART"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('Add to cart:', product);
        console.log('Quantity:', quantity);
      }}
      className={`${className}`}
      {...props}
    />
  );
};

AddToCartButton.propTypes = {
  type: PropTypes.string,
  product: PropTypes.shape({
    productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variantId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    variantTitle: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number,
  className: PropTypes.string,
};

export default AddToCartButton;
