// var findShortestSubArray = function(nums) {
//   // 哈希表保存每个元素出现的次数
//   const map = new Map()
//   nums.forEach(n => {
//     let count = map.get(n)
//     if (count === undefined) {
//       map.set(n, 1)
//     } else {
//       map.set(n, count + 1)
//     }
//   })

//   // 找到最大次数和对应的元素
//   let maxNs = []
//   let maxCount
//   for(const entry of map) {
//     const [n, count] = entry
//     if (maxCount === undefined || count > maxCount) {
//       if (count > maxCount) {
//         maxNs.length = 0
//       }
//       maxNs.push(n)
//       maxCount = count
//     } else if (count === maxCount) {
//       maxNs.push(n)
//     }
//   }

//   // 计算元素之间的gap，找到最小的那个
//   let min
//   maxNs.forEach(N => {
//     let allCount = 0
//     let nCount = 0
//     let start = false
//     for(let i = 0; i < nums.length; i++) {
//       const n = nums[i]
//       if (n === N) {
//         if (start === false) {
//           start = true
//         }
//         nCount++
//         allCount++

//         if (nCount === maxCount) {
//           if (min === undefined || allCount < min) {
//             min = allCount
//           }
//           continue
//         }

//       } else {
//         if (start === true) {
//           allCount++
//         }
//       }
//     }
//   })

//   return min
// }

var findShortestSubArray = function(nums) {
  if (nums.length === 1) {
    return 1
  }

  const map = new Map()
  nums.forEach((n, index) => {
    let data = map.get(n)
    if (data === undefined) {
      map.set(n, {
        count: 1,
        from: index,
        to: index
      })
    } else {
      data.count++
      data.to = index
    }
  })

  let maxCount
  let minGap
  for(const entry of map) {
    const [n, data] = entry
    const { count, from, to } = data
    if (maxCount === undefined || count >= maxCount) {
      if (count > maxCount) {
        minGap = undefined
      }

      maxCount = count
      // const gap = (to === undefined ? 1 : to - from + 1)
      const gap = to - from + 1
      if (minGap === undefined || gap < minGap) {
        minGap = gap
      }
    }
  }

  return minGap
}

// const nums = [1,2,2,3,1]
// const nums = [1,2,2,3,1,4,2]
const nums = [2, 1]
console.log(findShortestSubArray(nums))