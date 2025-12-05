import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    currency: 'PKR',
    user: null,
  });

  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency');
    if (savedCurrency) setState((prev) => ({ ...prev, currency: savedCurrency }));
  }, []);

  const updateState = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
    if (key === 'currency') localStorage.setItem('currency', value);
  };

  return <GlobalContext.Provider value={{ state, updateState }}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => useContext(GlobalContext);
