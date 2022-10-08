import axios from 'axios'

export const baseUrl = process.env.REACT_APP_BASE_URL;

export const clientServer = {
  // Lay data
  get: async (url) => await axios.get(`${baseUrl}${url}`),
  // Them moi
  post: async (url, data) => await axios.post(`${baseUrl}${url}`, data),
  // Thay the
  put: async (url, data) => await axios.put(`${baseUrl}${url}`, data),
  // chinh sua 1 phan
  patch: async (url, data) => await axios.patch(`${baseUrl}${url}`, data),
  // xoa
  delete: async (url) => await axios.delete(`${baseUrl}${url}`),

}