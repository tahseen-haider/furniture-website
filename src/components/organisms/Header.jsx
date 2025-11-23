import Heading from '../atoms/Heading';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/Navbar';

export default function Header() {
  const navLinks = [
    { title: 'Home', link: '/' },
    { title: 'Services', link: '#' },
    { title: 'Doctors', link: '#' },
    { title: 'Products', link: '#' },
    { title: 'Gallery', link: '#' },
  ];

  return (
    <>
      <div className="h-[122px]" />

      <header className="w-full h-[122px] bg-white px-16 fixed top-0 left-0 min-w-4xl">
        <div className="w-full h-full max-w-[1440px] flex justify-between items-center mx-auto">
          <Logo />

          <NavBar links={navLinks} />
        </div>
      </header>
    </>
  );
}
