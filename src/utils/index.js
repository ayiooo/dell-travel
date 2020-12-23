const splitArrayByCount = (arr, count) => {
  if (Array.isArray(arr) && !isNaN(count)) {
    if (arr.length < count) {
      return arr
    }
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      const index = Math.floor(i / count)
      if (!newArr[index]) {
        newArr[index] = []
      }
      newArr[index].push(arr[i])
    }
    return newArr
  } else {
    throw new Error('参数类型错误')
  }
}

export { splitArrayByCount }
