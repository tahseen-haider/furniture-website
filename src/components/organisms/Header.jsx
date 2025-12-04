import { Logo, Navbar } from '@components';

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
      <div className="h-20 md:h-30" />

      <header className="w-full h-20 md:h-30 bg-white px-16 fixed top-0 left-0 min-w-85 z-50 border-b border-gray-300">
        <div className="w-full h-full max-w-480 flex gap-10 justify-between items-center mx-auto">
          <Logo />

          <Navbar links={navLinks} />
        </div>
      </header>
    </>
  );
};

export default Header;
