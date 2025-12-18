import { useState } from 'react';

export const useAuthPending = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const start = () => {
    setPending(true);
    setError('');
  };

  const stop = () => {
    setPending(false);
  };

  return {
    pending,
    error,
    setError,
    start,
    stop,
  };
};
