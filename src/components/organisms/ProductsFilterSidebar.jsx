import { X } from 'lucide-react';
import { Paragraph, Button } from '@components';

const ProductsFilterSidebar = ({ onClose, children }) => {
  return (
    <div className="p-5 flex flex-col gap-4 h-full">
      <div className="flex justify-end">
        <X className="cursor-pointer text-gray-600" onClick={onClose} />
      </div>
      <Paragraph variant="G">Filter By</Paragraph>
      <div className="flex-1 overflow-y-auto w-full px-2 overflow-x-hidden">{children}</div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default ProductsFilterSidebar;
