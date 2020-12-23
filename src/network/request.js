import axios from 'axios'

const instance = axios.create({
  baseURL: '/'
})

instance.interceptors.request.use(config => config, err => console.log(err))
instance.interceptors.response.use(res => res.data, err => console.log(err))

export default instance
