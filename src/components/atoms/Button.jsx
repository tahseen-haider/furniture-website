export default function Button({ children, className = '', rounded = false, ...props }) {
  return (
    <button
      className={`cursor-pointer px-10 min-h-[68px] ${rounded ? 'rounded-full' : 'rounded-[3px]'} text-[16px] font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
