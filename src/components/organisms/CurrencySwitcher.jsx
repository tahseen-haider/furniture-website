import { useState, useRef, useEffect } from 'react';
import { useGlobal } from '@contexts';
import { currencyOptions } from '@utils';

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
        className="flex items-center gap-2 border border-gray-400 px-3 py-1.5 rounded shadow-sm bg-white hover:bg-gray-300 transition text-sm cursor-pointer"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="font-medium">{current.code}</span>
        <span
          className={`text-gray-500 text-lg transition-all duration-300 ${open ? '-rotate-90' : 'rotate-90'}`}
        >{`>`}</span>
      </button>

      {open && (
        <div
          className="
            absolute bottom-full mb-2 
            left-full -translate-x-1/2 
            w-48 bg-white rounded shadow-lg border border-gray-400
            z-50 animate-fade-up
          "
        >
          {currencyOptions.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                updateState('currency', item.code);
                setOpen(false);
              }}
              className="
                flex items-center gap-2 w-full
                px-2 py-2 rounded text-sm
                hover:bg-gray-300 transition cursor-pointer
              "
            >
              <span className="text-lg">{item.flag}</span>
              <div className="flex flex-col text-left">
                <span className="font-medium">{item.name}</span>
                <span className="text-xs text-gray-500">({item.code})</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
