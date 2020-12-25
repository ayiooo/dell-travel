import request from './request'

export const getDetailData = async (id) => {
  try {
    const data = request.get(`/api/detail.json?${id}`).then(res => res.data)
    return data
  } catch (err) {
    console.log(err)
  }
}
