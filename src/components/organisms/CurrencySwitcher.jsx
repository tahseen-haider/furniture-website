import { useState, useRef, useEffect } from 'react';
import { useGlobal } from '@contexts';
import { currencyOptions } from '@config';
import { Divider } from '@components';

const CurrencySwitcher = () => {
  const { state, updateState } = useGlobal();
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const current = currencyOptions.find((c) => c.code === state.currency);

  return (
    <div className="fixed bottom-8 left-8 z-40" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded bg-white hover:bg-gray-300 transition text-sm cursor-pointer shadow-[0_0_8px_rgb(255,255,255)]"
      >
        <span className="text-lg">{current?.flag}</span>
        <span className="font-medium">{current.code}</span>
        <span
          className={`text-gray-500 text-lg transition-all duration-300 ${open ? '-rotate-90' : 'rotate-90'}`}
        >{`>`}</span>
      </button>

      {open && (
        <div
          className="
            absolute bottom-full mb-2 
            left-0
            w-48 bg-white shadow-lg border border-gray-300
            z-40 animate-fade-up rounded
          "
        >
          {currencyOptions.map((item) => (
            <>
              <button
                key={item.code}
                onClick={() => {
                  if (item.code === current?.code) return;
                  updateState('currency', item.code);
                  setOpen(false);
                }}
                className={`
                  ${item?.code === current?.code ? 'bg-gray-300' : ''}
                  flex items-center gap-2 w-full
                  px-2 py-2 text-sm
                  hover:bg-gray-200 transition cursor-pointer
                `}
              >
                <span className="text-lg">{item?.flag}</span>
                <div className="flex flex-col text-left">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-gray-500">({item.code})</span>
                </div>
              </button>
              <Divider />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
