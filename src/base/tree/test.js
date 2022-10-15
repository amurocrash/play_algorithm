const { generateArr } = require('../../utils')
const { binarySearch } = require('./binary-search')
const { BST } = require('./bst')

function binarySearchTest() {
  const arr = [4, 1, 7, 3, 9, 2, 8, 0, 5]
  const index = binarySearch(arr, 8)
  console.log(index)
}

// 构建与搜索
function bstTest1() {
  const validate = (arr, bst) => {
    arr.forEach((item, index) => {
      bst.insert(index, item)
    })

    const count = arr.length

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length)
      const value = bst.search(randomIndex)
      if (value !== arr[randomIndex]) {
        console.log(false, randomIndex, value, arr[randomIndex])
        return
      }
    }

    console.log(true)
  }

  const arr = generateArr(1000)
  const bst = new BST()
  validate(arr, bst)
}

// traverse
function bstTest2() {
  
}

function run() {
  // binarySearchTest()
  bstTest()
}

module.exports = {
  run
}