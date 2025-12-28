import { Logo, Navbar, Divider, UserHeaderBtn } from '@components';
import { adminNavLinks } from '@config';

const AdminHeader = () => {
  return (
    <>
      <div className="h-20 lg:h-22" />

      <header className="w-full h-20 lg:h-22 bg-white fixed top-0 left-0 min-w-85 z-50">
        <div className="w-full h-full px-4 lg:px-16 max-w-480 flex gap-10 justify-between items-center mx-auto">
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="hidden lg:block">
            <Logo />
          </div>

          <div className="hidden lg:block">
            <UserHeaderBtn />
          </div>

          <div className="flex items-center gap-4 md:gap-8 ml-auto lg:hidden">
            <UserHeaderBtn />
            <Navbar links={adminNavLinks} />
          </div>
        </div>
        <Divider />
      </header>
    </>
  );
};

export default AdminHeader;
