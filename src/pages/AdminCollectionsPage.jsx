import { AdminListLayout } from '@templates';
import { adminAPI } from '@services';
import { AddCategoryForm, Image } from '@components';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminCollectionsPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleDelete = async (id) => {
    try {
      await adminAPI.categories.remove(id);
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminListLayout
      key={refreshKey}
      refreshKey={refreshKey}
      title="Categories"
      apiFetch={adminAPI.categories}
      addForm={AddCategoryForm}
      refreshCallback={() => setRefreshKey((prev) => prev + 1)}
      renderItem={{
        header: (
          <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
            <th className="p-3">ID</th>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Slug</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        ),
        row: (item) => (
          <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
            <td className="p-3 font-medium text-gray-800">{item.id}</td>
            <td className="p-3">
              {item.image ? (
                <Link target="_blank" to={`/collections/${item.slug}`}>
                  <Image
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
            <td className="p-3 text-gray-600">{item.slug}</td>
            <td className="p-3 text-center">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800 cursor-pointer"
                >
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

export default AdminCollectionsPage;
