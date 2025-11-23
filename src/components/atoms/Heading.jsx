const variants = {
  primary: 'text-[52px] leading-[65px] font-bold',
  secondary: 'text-[32px] font-bold',
  tertiary: 'text-[24px] font-semibold',
};

export default function Heading({ children, level = 1, variant = 'primary', className = '' }) {
  const Tag = `h${level}`;

  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}
