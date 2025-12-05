export const rebounce = (fn, delay = 300) => {
  let timeoutId;

  const debounced = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };

  return debounced;
};

export const slugify = (title) => {
  if (!title) return;
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s\_]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const currencyOptions = [
  { code: 'PKR', name: 'Pakistan Rupee', flag: '🇵🇰' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
];

export const currencySymbols = {
  PKR: 'Rs.',
  USD: '$',
  GBP: '£',
  CAD: 'C$',
  EUR: '€',
};

export const exchangeRates = {
  PKR: 1,
  USD: 0.0036,
  GBP: 0.0029,
  CAD: 0.0047,
  EUR: 0.0033,
};

export const formatNumber = (num, locale = 'en') => Number(num).toLocaleString(locale);

export const convertPrice = (price, currency = 'PKR') => {
  const rate = exchangeRates[currency] || 1;

  if (Array.isArray(price)) {
    return [price[0] * rate, price[1] * rate];
  }

  return price * rate;
};

export const formatPrice = (price, currency = 'PKR') => {
  const symbol = currencySymbols[currency] || currency;

  const converted = convertPrice(price, currency);

  if (Array.isArray(converted)) {
    return `${symbol} ${formatNumber(converted[0])} - ${formatNumber(converted[1])}`;
  }

  return `${symbol} ${formatNumber(converted)}`;
};
