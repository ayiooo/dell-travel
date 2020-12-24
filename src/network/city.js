import request from './request'

export const getCityData = async () => {
  try {
    const data = request.get('/api/city.json').then(res => res.data)
    return data
  } catch (err) {
    console.log(err)
  }
}
