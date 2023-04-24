import Axios from 'axios'

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3030/api/'

const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

axios.interceptors.request.use(config => {
  // Add common headers here
  return config
})

axios.interceptors.response.use(response => {
  // Handle common response scenarios here
  return response
}, error => {
  console.error(`Request failed with status ${error.response.status}: ${error.response.data.message}`)
  throw error
})

export const httpService = {
  async get(endpoint, data) {
    const response = await axios.get(endpoint, { params: data })
    return response.data
  },
  async post(endpoint, data) {
    const response = await axios.post(endpoint, data)
    return response.data
  },
  async put(endpoint, data) {
    const response = await axios.put(endpoint, data)
    return response.data
  },
  async delete(endpoint, data) {
    const response = await axios.delete(endpoint, { data })
    return response.data
  }
}