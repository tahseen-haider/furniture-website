export default function Button({ children, className = '', rounded = false, ...props }) {
  return (
    <button
      className={`cursor-pointer px-12 min-h-[68px] ${rounded ? 'rounded-full' : 'rounded-[3px]'} text-[16px] font-bold bg-(--color-bg-primary) max-w-fit ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
