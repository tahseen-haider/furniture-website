import PropTypes from 'prop-types';

const variants = {
  primary: 'text-[40px] lg:text-[52px] leading-[65px] font-bold',
  secondary: 'text-[26px] sm:text-[32px] font-bold',
  tertiary: 'text-[20px] sm:text-[24px] font-semibold',
};

const Heading = ({ children, level = 1, variant = 'primary', className = '' }) => {
  const Tag = `h${level}`;
  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  variant: 'primary',
  className: '',
};

export default Heading;
