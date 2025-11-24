import PropTypes from 'prop-types';

const variants = {
  primary: 'text-[52px] leading-[65px] font-bold',
  secondary: 'text-[32px] font-bold',
  tertiary: 'text-[24px] font-semibold',
};

function Heading({ children, level = 1, variant = 'primary', className = '' }) {
  const Tag = `h${level}`;

  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired, // anything renderable inside heading
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]), // only valid HTML heading levels
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']), // must match defined variants
  className: PropTypes.string, // optional additional classes
};

Heading.defaultProps = {
  level: 1,
  variant: 'primary',
  className: '',
};

export default Heading;
