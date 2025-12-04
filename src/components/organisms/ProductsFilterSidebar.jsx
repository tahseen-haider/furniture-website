import { X } from 'lucide-react';
import { Paragraph, BWButton, Divider } from '@components';

const ProductsFilterSidebar = ({ onClose, onClearParams, children }) => {
  return (
    <div className="p-5 flex flex-col gap-4 h-full bg-(--color-surface-300)">
      <div className="flex justify-end">
        <X className="cursor-pointer text-gray-600" onClick={onClose} />
      </div>
      <Paragraph variant="G">Filter By</Paragraph>
      <Divider />
      <div className="flex-1 overflow-y-auto w-full px-2 overflow-x-hidden flex flex-col gap-4">
        {children}
      </div>
      <div className="flex flex-col gap-3">
        <BWButton
          variant="white"
          text="CLEAR ALL"
          onClick={() => {
            onClearParams();
            onClose();
          }}
        />
        <BWButton variant="black" text="APPLY FILTERS" onClick={onClose} />
      </div>
    </div>
  );
};

export default ProductsFilterSidebar;
