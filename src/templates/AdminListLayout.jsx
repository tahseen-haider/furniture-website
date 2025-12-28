import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heading, Divider } from '@components';

const AdminListLayout = ({ title, apiFetch, renderItem, addForm: AddFormComponent }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [params, setParams] = useSearchParams();
  const [showAdd, setShowAdd] = useState(false);

  const filters = Object.fromEntries([...params]);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    apiFetch(filters)
      .then((res) => {
        setItems(res.products || res);
        setPagination(res.pagination || { totalPages: 1 });
      })
      .finally(() => setLoading(false));
  }, [params.toString()]);

  const handlePageChange = (page) => {
    const newParams = new URLSearchParams(params);
    newParams.set('page', page);
    setParams(newParams);
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between items-center mb-4">
        <Heading level={2} variant="tertiary">
          {title}
        </Heading>
        {AddFormComponent && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowAdd(true)}
          >
            Add New
          </button>
        )}
      </div>

      <Divider />

      {loading ? (
        <div>Loading...</div>
      ) : items?.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow rounded">
            <thead className="bg-gray-200">{renderItem.header}</thead>
            <tbody>{items.map((item) => renderItem.row(item))}</tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">No items found</div>
      )}

      {pagination?.totalPages > 1 && (
        <div className="mt-4 flex justify-end gap-2">
          {Array.from({ length: pagination.totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className="px-3 py-1 border rounded hover:bg-gray-200"
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {AddFormComponent && showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4">
          <div className="bg-white rounded p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowAdd(false)}
            >
              ✕
            </button>
            <AddFormComponent onClose={() => setShowAdd(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminListLayout;
