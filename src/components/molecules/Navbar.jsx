import PropTypes from 'prop-types';
import { Link } from '@components';

const NavBar = ({ links }) => {
  return (
    <nav>
      <ul className="flex gap-14">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
