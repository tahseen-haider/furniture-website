import { Logo, Navbar, Divider } from '@components';

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
      <div className="h-20 md:h-26" />

      <header className="w-full h-20 md:h-26 bg-white fixed top-0 left-0 min-w-85 z-50">
        <div className="w-full h-full px-4 md:px-16 max-w-480 flex gap-10 justify-between items-center mx-auto">
          <Logo />

          <Navbar links={navLinks} />
        </div>
        <Divider />
      </header>
    </>
  );
};

export default Header;
