import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-5xl flex flex-col">
      <Header />
      <main className="w-full py-6 px-4 mx-auto bg-amber-600">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
