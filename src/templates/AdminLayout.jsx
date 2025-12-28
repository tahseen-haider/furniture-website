import { CurrencySwitcher, AdminHeader, AdminSidebar } from '@components';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="min-h-screen min-w-85 flex flex-col">
      <CurrencySwitcher />
      <AdminHeader />
      <main className="w-full mx-auto">
        <div className="flex relative">
          <AdminSidebar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
