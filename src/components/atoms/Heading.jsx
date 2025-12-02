import PropTypes from 'prop-types';
import { Underline } from '@components';

const variants = {
  primary: 'text-[40px] lg:text-[52px] leading-[65px] font-bold',
  secondary: 'text-[26px] sm:text-[46px] font-medium',
  tertiary: 'text-[20px] sm:text-[24px] font-semibold',
};

const Heading = ({ children, level = 1, variant = 'primary', className = '', underline }) => {
  const Tag = `h${level}`;

  const underlineEnabled = Boolean(underline);

  return (
    <Tag
      className={`${variants[variant]} ${className} ${underlineEnabled ? 'group inline-block' : ''}`}
    >
      <span className="relative inline-block">
        {children}
        {underlineEnabled && <Underline direction={underline} />}
      </span>
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  className: PropTypes.string,
  underline: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Heading;
