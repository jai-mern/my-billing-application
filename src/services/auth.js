// auth.js

import api from './api';

const auth = {
  async login(credentials) {
    // Implement login logic here using the API
    try {
      const response = await api.post('login', credentials);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async register(userInfo) {
    // Implement user registration logic here using the API
    try {
      const response = await api.post('register', userInfo);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    // Implement logout logic here
    try {
      const response = await api.post('logout');
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default auth;
