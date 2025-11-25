import { Logo, NavBar } from '@/components';

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
      <div className="h-[122px]" />

      <header className="w-full h-[122px] bg-white px-16 fixed top-0 left-0 min-w-4xl z-50">
        <div className="w-full h-full max-w-[1440px] flex justify-between items-center mx-auto">
          <Logo />

          <NavBar links={navLinks} />
        </div>
      </header>
    </>
  );
};

export default Header;
