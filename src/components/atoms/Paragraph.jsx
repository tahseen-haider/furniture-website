import PropTypes from 'prop-types';

const variants = {
  A: 'font-medium text-[18px] leading-[39px]',
  B: 'font-normal text-[20px] leading-[100%] text-center',
  C: 'font-normal text-[20px] leading-[39px]',
  D: 'font-normal text-[18px] leading-[28px] text-center',
  E: 'font-normal text-[20px] leading-[39px] text-center',
  F: 'font-normal text-[16px] leading-[35px]',
};

function Paragraph({ children, className = '', variant = 'A', maxChars }) {
  let text = children;

  if (typeof maxChars === 'number' && text.length > maxChars) {
    text = text.slice(0, maxChars).trimEnd() + '...';
  }

  return <p className={`${variants[variant]} ${className}`}>{text}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired, // text content of paragraph
  className: PropTypes.string, // optional additional CSS classes
  variant: PropTypes.oneOf(Object.keys(variants)), // must match defined variants
  maxChars: PropTypes.number, // optional truncation length
};

Paragraph.defaultProps = {
  className: '',
  variant: 'A',
  maxChars: undefined,
};

export default Paragraph;
