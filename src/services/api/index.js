const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/mock';

export async function http(method, endpoint, body) {
  try {
    const url = BASE_URL === '/mock' ? `${BASE_URL}${endpoint}.json` : `${BASE_URL}${endpoint}`;

    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (body) options.body = JSON.stringify(body);

    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    return await res.json();
  } catch (error) {
    return null;
  }
}

export const GET = (endpoint, body) => http('GET', endpoint, body);
export const POST = (endpoint, body) => http('POST', endpoint, body);
export const PUT = (endpoint, body) => http('PUT', endpoint, body);
export const DELETE = (endpoint) => http('DELETE', endpoint);
