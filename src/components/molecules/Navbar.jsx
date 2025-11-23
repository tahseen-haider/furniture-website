import Link from '../atoms/Link';

export default function NavBar({ links }) {
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
