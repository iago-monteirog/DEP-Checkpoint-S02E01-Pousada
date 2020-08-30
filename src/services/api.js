import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pousada-cative.herokuapp.com'
})

export default api;