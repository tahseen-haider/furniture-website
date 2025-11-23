const variants = {
  A: 'font-medium text-[18px] leading-[39px]',
  B: 'font-normal text-[20px] leading-[100%] text-center',
  C: 'font-normal text-[20px] leading-[39px]',
  D: 'font-normal text-[18px] leading-[28px] text-center',
  E: 'font-normal text-[20px] leading-[39px] text-center',
  F: 'font-normal text-[16px] leading-[35px]',
};

export default function Paragraph({ children, className = '', variant = 'A' }) {
  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}
