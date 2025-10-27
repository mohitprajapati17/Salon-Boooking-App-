import axios from "axios"

const API_BASE_URL="http://localhost:5000"

export const api=axios.create({
    baseURL:API_BASE_URL,
   
})
api.defaults.headers.post['Content-Type']='application/json'
export default api