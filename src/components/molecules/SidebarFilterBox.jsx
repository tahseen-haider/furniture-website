import { useState, useRef, useEffect } from 'react';
import { Paragraph } from '@components';

const SidebarFilterBox = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, children]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between cursor-pointer group w-full" onClick={toggleOpen}>
        <Paragraph variant="D" underline="center">
          {title}
        </Paragraph>
        <span
          className={`text-xl transition-transform duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          {`>`}
        </span>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="w-full overflow-hidden transition-[max-height] duration-300"
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarFilterBox;
