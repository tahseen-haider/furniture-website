import { Link as RouterLink } from 'react-router-dom';

export default function Link({ to, children, className = '', ...props }) {
  return (
    <RouterLink to={to} className={`font-semibold text-[14px] ${className}`} {...props}>
      {children}
    </RouterLink>
  );
}
