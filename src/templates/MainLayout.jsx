import { Header, Footer } from '@components';
import { Outlet } from 'react-router-dom';
import CurrencySwitcher from '../components/organisms/CurrencySwitcher';

const MainLayout = () => {
  return (
    <div className="min-h-screen min-w-85 flex flex-col">
      <CurrencySwitcher />
      <Header />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
