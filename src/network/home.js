import request from './request'

export const getHomeData = async () => {
  try {
    const data = request.get('/api/index.json').then(res => res.data)
    return data
  } catch (err) {
    console.log(err)
  }
}
