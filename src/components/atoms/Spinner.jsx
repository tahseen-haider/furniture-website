import { Loader2 } from 'lucide-react';

const Spinner = ({ size = 28 }) => {
  return <Loader2 size={size} className="animate-spin" />;
};

export default Spinner;
