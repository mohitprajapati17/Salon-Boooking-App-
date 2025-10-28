import axios from 'axios'

export const API_BASE_URL="http://localhost:8085"

export const api=axios.create({
    baseURL:API_BASE_URL,
   
})
api.defaults.headers.post['Content-Type']='application/json'
export default api