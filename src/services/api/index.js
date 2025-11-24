const BASE_URL = '/mock';

export async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    return null;
  }
}
