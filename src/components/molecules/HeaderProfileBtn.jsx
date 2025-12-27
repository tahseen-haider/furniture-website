import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User, LogOut, LayoutDashboard } from 'lucide-react';
import { Tooltip } from '@components';
import { logoutThunk } from '@store';
import { Link } from 'react-router-dom';

const HeaderProfileBtn = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logoutThunk());
    setOpen(false);
  };

  return (
    <div className="relative flex" ref={dropdownRef}>
      <Tooltip text="Profile">
        <div
          className="w-7 h-7 rounded-full overflow-hidden cursor-pointer flex items-center justify-center my-auto"
          onClick={() => setOpen((prev) => !prev)}
        >
          <User className="w-full h-full" />
        </div>
      </Tooltip>

      {open && isLoggedIn && userInfo && (
        <div className="absolute -right-4 top-10 min-w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="p-4 border-b border-gray-100">
            <p className="font-medium text-gray-800">{userInfo.username}</p>
            <p className="text-sm text-gray-500">{userInfo.email}</p>
          </div>
          <div className="flex flex-col gap-1">
            {userInfo?.role === 'admin' && (
              <Link
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 cursor-pointer"
                to="/admin/dashboard"
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
            )}
            <button
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfileBtn;
