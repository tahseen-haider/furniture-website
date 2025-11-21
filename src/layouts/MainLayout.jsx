import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-5xl flex flex-col">
      <main className="w-full py-6 px-4 mx-auto bg-amber-600">
        <Outlet />
      </main>
    </div>
  );
}
