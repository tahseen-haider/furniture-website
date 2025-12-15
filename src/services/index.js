export * from './api/products';
export * from './api/collections';
export * from './api/orders';

export const simulateDelay = (promise, delay = 500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve).catch(reject);
    }, delay);
  });
