import { AdminListLayout } from '@templates';
import { adminAPI } from '@services';
import { useState } from 'react';

const AdminUsersPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <AdminListLayout
      key={refreshKey}
      refreshKey={refreshKey}
      title="Users"
      apiFetch={adminAPI.users}
      renderItem={{
        header: (
          <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
            <th className="p-3">ID</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Created At</th>
          </tr>
        ),
        row: (user) => (
          <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
            <td className="p-3 font-medium text-gray-800">{user.id}</td>
            <td className="p-3">{user.username}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">{new Date(user.createdAt).toLocaleString()}</td>
          </tr>
        ),
      }}
    />
  );
};

export default AdminUsersPage;
