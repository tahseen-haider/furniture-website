import { AdminListLayout } from '@templates';
import { adminAPI } from '@services';
import { useState } from 'react';
import { Button } from '@components';

const AdminOrdersPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      <Button
        tertiary
        className="absolute right-4 top-2"
        onClick={() => {
          window.open('/track-order', '_blank');
        }}
      >
        Track Order
      </Button>
      <AdminListLayout
        key={refreshKey}
        refreshKey={refreshKey}
        title="Orders"
        apiFetch={adminAPI.orders}
        renderItem={{
          header: (
            <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
              <th className="p-3">Tracking ID</th>
              <th className="p-3">Status</th>
              <th className="p-3">Product Count</th>
              <th className="p-3">Estimated Delivery</th>
              <th className="p-3">Latest Status</th>
              <th className="p-3">Created At</th>
            </tr>
          ),
          row: (order) => (
            <tr
              key={order.trackingId}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="p-3 font-medium text-gray-800">{order.trackingId}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">{order.productCount}</td>
              <td className="p-3">{order.estimatedDelivery}</td>
              <td className="p-3">{order.latestTimelineStatus}</td>
              <td className="p-3">{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ),
        }}
      />
    </>
  );
};

export default AdminOrdersPage;
