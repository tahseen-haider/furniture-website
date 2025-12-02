import PropTypes from 'prop-types';
import { Link } from '@components';
import { useState } from 'react';
import { Heading, Icon } from '@components';
import hamburgerIcon from '/icons/hamburger.svg';
import closeIcon from '/icons/X.svg';

const Navbar = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="desktop-nav" className="hidden md:block">
        <ul className="flex gap-14">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.link} underline="center">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={() => setOpen(!open)} className="block md:hidden">
        <Icon src={open ? closeIcon : hamburgerIcon} alt="Menu" className="w-7 h-7" />
      </button>

      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="px-5 py-6 flex justify-between items-center border-b border-gray-200">
          <Heading variant="tertiary" className="text-lg font-semibold">
            Menu
          </Heading>
          <button onClick={() => setOpen(false)} className="pr-11">
            <Icon src={closeIcon} alt="Menu" className="w-7 h-7" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.link} underline="center" onClick={() => setOpen(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 md:hidden z-40" />
      )}
    </>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
