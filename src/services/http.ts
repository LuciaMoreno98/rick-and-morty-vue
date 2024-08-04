import axios from 'axios'

const http = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  withCredentials: false,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})
http.interceptors.request.use(
  async function (config) {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default http
