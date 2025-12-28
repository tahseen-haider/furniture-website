import { useState } from 'react';
import { X } from 'lucide-react';

const AddProductForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    product: {
      title: '',
      slug: '',
      description: '',
      generalCategory: '',
      vendor: '',
      freeShipping: false,
      available: true,
      itemsInStock: 0,
    },
    categories: [],
    variants: [],
    images: [],
    features: [],
    buyTogether: [],
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <X size={20} />
        </button>
      </div>

      <input
        type="text"
        placeholder="Product Title"
        className="w-full p-2 border rounded"
        value={formData.product.title}
        onChange={(e) =>
          setFormData({ ...formData, product: { ...formData.product, title: e.target.value } })
        }
      />

      {/* Add more fields like slug, description, price, images, variants etc. */}

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Product
      </button>
    </div>
  );
};

export default AddProductForm;
