export default async function fetchJSON(path, options) {
  try {
    const response = await fetch(`https://swapi.co/api${path}`, options);
    return await response.json();
  } catch (error) {
    throw error;
  }
}
