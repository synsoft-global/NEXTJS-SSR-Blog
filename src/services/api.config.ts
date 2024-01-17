import axios from 'axios'
import config from '@/config/config.json'



const api = axios.create({
  baseURL: config.apiBaseUrl,
})


api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)


export { api }