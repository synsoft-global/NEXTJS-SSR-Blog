import axios from 'axios'



const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})


api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)


export { api }