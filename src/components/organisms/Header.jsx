import { Logo, Navbar } from '@components';

const Header = () => {
  const navLinks = [
    { title: 'Home', link: '/' },
    { title: 'Services', link: '#' },
    { title: 'Doctors', link: '#' },
    { title: 'Products', link: '/products' },
    { title: 'Gallery', link: '#' },
  ];

  return (
    <>
      <div className="h-20 md:h-[122px]" />

      <header className="w-full h-20 md:h-[122px] bg-white px-16 fixed top-0 left-0 min-w-[340px] z-50">
        <div className="w-full h-full max-w-[1440px] flex gap-10 justify-between items-center mx-auto">
          <Logo />

          <Navbar links={navLinks} />
        </div>
      </header>
    </>
  );
};

export default Header;
