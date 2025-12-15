import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackOrderBtn = ({ className = '' }) => {
  return (
    <Link to="/track-order" className="relative cursor-pointer">
      <MapPin size={26} className={`${className}`} />
    </Link>
  );
};

export default TrackOrderBtn;
