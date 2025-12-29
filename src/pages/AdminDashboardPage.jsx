import { useEffect, useState } from 'react';
import { adminAPI } from '@services';
import { Select, StatCard, Price } from '@components';
import { Users, Package, ShoppingCart } from 'lucide-react';
import { AdminProductsPage, AdminOrdersPage, AdminUsersPage, AdminCollectionsPage } from '@pages';

const DASHBOARD_OPTIONS = [
  { value: 'orders', label: 'Orders' },
  { value: 'products', label: 'Products' },
  { value: 'categories', label: 'Categories' },
  { value: 'users', label: 'Users' },
];

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [selectedList, setSelectedList] = useState('products');

  const fetchStats = async () => {
    setLoadingStats(true);
    try {
      const res = await adminAPI.dashboard.stats();
      setStats(res?.data?.stats);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const pageMap = {
    orders: <AdminOrdersPage />,
    products: <AdminProductsPage />,
    categories: <AdminCollectionsPage />,
    users: <AdminUsersPage />,
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex flex-wrap gap-4 p-4">
        {loadingStats ? (
          <p>Loading stats...</p>
        ) : (
          <>
            <StatCard title="Total Orders" value={stats.totalOrders} icon={ShoppingCart} />
            <StatCard title="Total Users" value={stats.totalUsers} icon={Users} />
            <StatCard title="Total Products" value={stats.totalProducts} icon={Package} />
            <StatCard
              title="Total Revenue"
              value={<Price amount={stats.totalRevenue} />}
              icon={ShoppingCart}
            />
          </>
        )}
      </div>

      <div className="">
        <div className="max-w-xs px-4">
          <Select
            label="Select List"
            value={selectedList}
            onChange={setSelectedList}
            options={DASHBOARD_OPTIONS}
          />
        </div>

        <div>{pageMap[selectedList]}</div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
