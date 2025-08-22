/* eslint-disable import/no-anonymous-default-export */
import api from "../../api";
import UserMapper from "./user.mapper";

class UserService {
  async list(params) {
    console.log(params);
    const response = await api.get('/users', { params: params });

    const dataToReturn = {
      data: response.data.data.map(value => UserMapper.fromBackend(value)),
      pagination: response.data.pagination,
    }
    return dataToReturn;
  }

  async get(id) {
  const response = await api.get(`/users/${id}`);
  // backend returns { data: user }
  const user = response.data.data;
  return UserMapper.fromBackend(user);
  }

  async create(data) {
    const response = await api.post('/users', data);
    
    return response.data.data;
  }

  async delete(id) {
    const response = await api.delete(`/users/${id}`);
    
    return response;  
  }

  async update(id, data) {
    console.log(data);
    const response = await api.put(`/users/${id}`, data);
    
    return response.data.data;
  }
}

export default new UserService();
