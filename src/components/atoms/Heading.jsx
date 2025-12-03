import PropTypes from 'prop-types';
import { Underline } from '@components';

const variants = {
  primary: 'text-[40px] lg:text-[52px] leading-[65px] font-bold',
  secondary: 'text-[36px] lg:text-[52px] font-normal',
  tertiary: 'text-[20px] md:text-[24px] font-semibold',
  title: 'text-[16px] font-semibold',
};

const Heading = ({
  children,
  level = 1,
  variant = 'primary',
  className = '',
  underline,
  maxChars,
}) => {
  const Tag = `h${level}`;
  const underlineEnabled = Boolean(underline);

  let text = children;
  if (typeof maxChars === 'number' && typeof text === 'string' && text.length > maxChars) {
    text = text.slice(0, maxChars).trimEnd() + '...';
  }

  return (
    <Tag
      className={`${variants[variant]} ${className} ${underlineEnabled ? 'group inline-block' : ''}`}
    >
      <span className="relative inline-block">
        {text}
        {underlineEnabled && <Underline direction={underline} />}
      </span>
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'title']),
  className: PropTypes.string,
  underline: PropTypes.oneOf(['left', 'center', 'right']),
  maxChars: PropTypes.number,
};

export default Heading;
