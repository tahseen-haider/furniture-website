export default function Input({ className = '', ...props }) {
  return <input className={`flex-1 h-full max-h-[70px] px-2 bg-white ${className}`} {...props} />;
}
