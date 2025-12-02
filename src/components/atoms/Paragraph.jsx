import PropTypes from 'prop-types';
import { Underline } from '@components';

const variants = {
  A: 'font-medium text-[16px] sm:text-[18px] leading-[39px]',
  B: 'font-normal text-[18px] sm:text-[20px] leading-[100%] text-center',
  C: 'font-normal text-[18px] sm:text-[20px] leading-[39px]',
  D: 'font-normal text-[16px] sm:text-[18px] leading-[28px] text-center',
  E: 'font-normal text-[18px] sm:text-[20px] leading-[39px] text-center',
  F: 'font-normal text-[14px] sm:text-[16px] leading-[35px]',
  G: 'font-normal text-[20px] sm:text-[34px] leading-[39px]',
};

const Paragraph = ({ children, className = '', underline, variant = 'A', maxChars }) => {
  const underlineEnabled = Boolean(underline);
  let text = children;

  if (typeof maxChars === 'number' && text.length > maxChars) {
    text = text.slice(0, maxChars).trimEnd() + '...';
  }

  return (
    <p className={`${variants[variant]} ${className}`}>
      <span className="relative inline-block">
        {children}
        {underlineEnabled && <Underline direction={underline} />}
      </span>
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  maxChars: PropTypes.number,
  underline: PropTypes.oneOf(['right', 'center', 'left']),
};

export default Paragraph;
