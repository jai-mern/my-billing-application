// api.js

const BASE_URL = 'http://your-api-base-url.com';

const api = {
  async fetch(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default api;
