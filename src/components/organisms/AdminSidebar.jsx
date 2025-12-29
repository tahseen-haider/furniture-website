import { adminNavLinks } from '@config';
import { Link, useLocation } from 'react-router-dom';
import { Heading } from '@components';

const AdminSidebar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="hidden lg:block w-78" />
      <div className="fixed">
        <div className="hidden lg:flex flex-col gap-2 p-2 w-78 bg-white h-[calc(100vh-5.5rem)] overflow-y-auto border-r-2 border-gray-300">
          {adminNavLinks.map((link, i) => {
            const Icon = link?.icon;
            const isActive = pathname === link?.link;
            return (
              <Link
                key={i}
                to={link?.link}
                className={`flex gap-4 p-4 rounded-lg items-center ${isActive ? 'bg-blue-600 text-white' : 'bg-inherit hover:bg-gray-200 text-gray-950'}`}
              >
                <Icon />
                <Heading variant="title">{link?.title}</Heading>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
