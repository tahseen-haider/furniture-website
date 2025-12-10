export * from './api/products';
export * from './api/collections';

export const simulateDelay = (promise, delay = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve).catch(reject);
    }, delay);
  });
