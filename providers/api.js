import Axios from 'axios'


const api = Axios.create({
  baseURL: 'https://mock-api-peoples.herokuapp.com/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
