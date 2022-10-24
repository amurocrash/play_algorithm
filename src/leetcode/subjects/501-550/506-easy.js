// 先排序再用indexOf
// var findRelativeRanks = function(score) {
//   // const sortedIndexes = quickSort(score)
//   // console.log(sortedIndexes)
//   const res = []
//   const origin = [...score]
//   const sorted = score.sort((a, b) => b - a)
//   origin.forEach(e => {
//     const rank = sorted.indexOf(e)
//     if (rank === 0) {
//       res.push('Gold Medal')
//     } else if (rank === 1) {
//       res.push('Silver Medal')
//     } else if (rank === 2) {
//       res.push('Bronze Medal')
//     } else {
//       res.push((rank + 1) + '')
//     }
//   })

//   return res
// }

const desc = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
var findRelativeRanks = function(score) {
  const res = []

  const temp = score.map((e, index) => [e, index]) // 实现索引排序的一种方式
  temp.sort((a, b) => b[0] - a[0])
  // temp排序后就是从第一名到第N名的数据，所以index就是对应的排名
  // temp[index][1]，就是排名为index的数据在原数组中的索引
  // res索引为temp[index][1]的值，就是index本身
  temp.forEach((_, index) => {
    if (index <= 2) {
      res[temp[index][1]] = desc[index]
    } else {
      res[temp[index][1]] = (index + 1) + ''
    }
  })
  
  return res
}

const score = [10, 3, 8, 9, 4]
// const score = [5, 4, 3, 2, 1]
console.log(findRelativeRanks(score))