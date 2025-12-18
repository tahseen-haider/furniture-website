import { User } from 'lucide-react';
import { Tooltip } from '@components';
const HeaderProfileBtn = () => {
  return (
    <>
      <Tooltip text="Profile">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 p-1 cursor-pointer">
          <User className="w-full h-full" />
        </div>
      </Tooltip>
    </>
  );
};

export default HeaderProfileBtn;
