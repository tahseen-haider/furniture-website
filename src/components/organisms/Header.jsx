import { Logo, Navbar, Divider, CartBtn } from '@components';

const Header = () => {
  const navLinks = [
    { title: 'Shop', link: '/collections' },
    { title: 'Spaces', link: '#' },
    { title: 'Our Services', link: '#' },
    { title: 'Our Projects', link: '#' },
    { title: 'Contact', link: '#' },
  ];

  return (
    <>
      <div className="h-20 lg:h-26" />

      <header className="w-full h-20 lg:h-26 bg-white fixed top-0 left-0 min-w-85 z-50">
        <div className="w-full h-full px-4 lg:px-16 max-w-480 flex gap-10 justify-between items-center mx-auto">
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="hidden lg:block">
            <Logo />
          </div>

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <Navbar links={navLinks} />
          </div>

          <div className="flex items-center gap-8 ml-auto lg:hidden">
            <CartBtn />
            <Navbar links={navLinks} />
          </div>

          <div className="hidden lg:flex items-center ml-auto">
            <CartBtn />
          </div>
        </div>
        <Divider />
      </header>
    </>
  );
};

export default Header;
