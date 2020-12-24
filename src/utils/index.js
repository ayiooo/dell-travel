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

const debounce = (fn, delay = 50) => {
  let timer = null
  return function (...args) {
    if (timer) {
      // 有定时器清除
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, ...args)
      clearTimeout(timer)
    }, delay)
  }
}

export { splitArrayByCount, debounce }
