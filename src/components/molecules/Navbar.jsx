import PropTypes from 'prop-types';
import { Link } from '@/components';

function NavBar({ links }) {
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
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired, // path or URL
      title: PropTypes.string.isRequired, // link text
    })
  ).isRequired,
};

export default NavBar;
