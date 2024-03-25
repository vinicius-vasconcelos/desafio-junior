const API_BASE_URL = 'http://localhost:3003/user/';

async function fetchData(username) {
  try {
    const response = await fetch(API_BASE_URL + username);
    const userData = await response.json();
    if (userData.error) throw userData.error;
    return userData;
  } catch (error) {
    throw error;
  }
}

export { fetchData };
