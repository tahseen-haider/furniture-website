import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heading, Divider } from '@components';
import { Plus, X } from 'lucide-react';

const AdminListLayout = ({
  title,
  apiFetch,
  renderItem,
  addForm: AddFormComponent,
  refreshKey,
  refreshCallback,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [params, setParams] = useSearchParams();
  const [showAdd, setShowAdd] = useState(false);

  const filters = Object.fromEntries([...params]);

  const fetchItems = async () => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const res = await apiFetch.fetchAll(filters);
      setItems(
        res?.data?.items ||
          res?.data?.products ||
          res?.data?.categories ||
          res?.data?.users ||
          res?.data?.orders
      );
      setPagination(res.pagination || { totalPages: 1 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [params.toString()]);

  useEffect(() => {
    fetchItems();
  }, [refreshKey]);

  const handlePageChange = (page) => {
    const newParams = new URLSearchParams(params);
    newParams.set('page', page);
    setParams(newParams);
  };

  const handleAddSubmit = async (payload, helpers, createAPI) => {
    const { setErrors, setMessage } = helpers;

    try {
      setErrors({});
      setMessage('');

      await createAPI(payload);

      if (typeof refreshCallback === 'function') refreshCallback();

      return true;
    } catch (err) {
      const backend = err?.data;

      if (backend?.errors && Array.isArray(backend.errors)) {
        const backendErrors = {};
        backend.errors.forEach((e) => {
          const [field] = e.split(' is ');
          backendErrors[field] = e;
        });
        setErrors(backendErrors);
        setMessage(backend.message || 'Validation failed');
      } else {
        setMessage(backend?.message || err.message || 'Failed to create item');
      }

      return false;
    }
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between items-center mb-4">
        <Heading level={2} variant="tertiary">
          {title}
        </Heading>
        {AddFormComponent && (
          <button
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => setShowAdd(true)}
          >
            <Plus />
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowAdd(false)}
        >
          <div
            className="bg-white rounded max-w-lg max-h-[calc(100vh-2rem)] w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full justify-between mb-4 px-6 pt-4">
              <Heading variant="medium">Add {title}</Heading>
              <button className="text-gray-500 hover:text-black" onClick={() => setShowAdd(false)}>
                <X />
              </button>
            </div>
            <Divider />
            <AddFormComponent
              onClose={() => setShowAdd(false)}
              onSubmit={(payload, helpers) => handleAddSubmit(payload, helpers, apiFetch.create)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminListLayout;
