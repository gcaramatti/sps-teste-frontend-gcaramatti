/* eslint-disable import/no-anonymous-default-export */
import api from '../../api';

class AuthService {
  async login(payload) {
    try {
      const response = await api.post('/auth/login', payload);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAuthUser() {
    try {
        const response = await api.get('/auth/user');

        return response;
    } catch (error) {
        throw error;
    }
  }
}

export default new AuthService();