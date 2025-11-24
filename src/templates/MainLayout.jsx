import { Header, Footer } from '@/components';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-5xl flex flex-col">
      <Header />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
