export async function http(method, url, body, config = {}) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    credentials: 'include',
  };

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);

  let data = null;
  const contentType = res.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    data = await res.json();
  }

  if (!res.ok) {
    const error = new Error(data?.message || 'Request failed');
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const GET = (url, config) => http('GET', url, null, config);
export const POST = (url, body, config) => http('POST', url, body, config);
export const PUT = (url, body, config) => http('PUT', url, body, config);
export const DELETE = (url, config) => http('DELETE', url, null, config);
