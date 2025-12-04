import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SidebarOverlay = ({ isOpen, onClose, side = 'left', children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300
        ${isOpen ? 'bg-black/40 pointer-events-auto' : 'bg-transparent pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          fixed top-0 h-full bg-white shadow-xl transition-transform duration-300 w-11/12 min-w-64 max-w-[600px]
          ${side === 'left' ? 'left-0' : 'right-0'}
          ${isOpen ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'}
        `}
      >
        {children}
      </div>
    </div>
  );
};

SidebarOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  side: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
};

export default SidebarOverlay;
