import { AdminListLayout } from '@templates';
import { adminAPI } from '@services';
import { AddProductForm, Price } from '@components';
import { Edit2, Trash2, Image, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminProductsPage = () => {
  return (
    <AdminListLayout
      title="Products"
      apiFetch={adminAPI.products.fetchAll}
      addForm={AddProductForm}
      renderItem={{
        header: (
          <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
            <th className="p-3">ID</th>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Vendor</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3 text-center">Available</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        ),
        row: (item) => (
          <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
            <td className="p-3 font-medium text-gray-800">{item.id}</td>
            <td className="p-3">
              {item.image ? (
                <Link target="_blank" to={`/product/${item.id}/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-12 object-cover rounded"
                  />
                </Link>
              ) : (
                <Image size={20} className="text-gray-400" />
              )}
            </td>
            <td className="p-3 text-gray-700 font-medium">{item.title}</td>
            <td className="p-3 text-gray-600">{item.vendor}</td>
            <td className="p-3 text-gray-700">
              <Price amount={item.price} />
            </td>
            <td className="p-3 text-gray-700">{item.itemsInStock}</td>
            <td className="p-3 text-center">
              {item.available === 'true' || item.available === 'in' ? (
                <CheckCircle size={18} className="text-green-500 mx-auto" />
              ) : (
                <XCircle size={18} className="text-red-500 mx-auto" />
              )}
            </td>
            <td className="p-3">
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                  <Edit2 size={20} />
                </button>
                <button className="flex items-center gap-1 text-red-600 hover:text-red-800 cursor-pointer">
                  <Trash2 size={20} />
                </button>
              </div>
            </td>
          </tr>
        ),
      }}
    />
  );
};

export default AdminProductsPage;
