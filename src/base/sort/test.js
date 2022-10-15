const { bubbleSort, selectionSort, insertSort, insertSortPro, mergeSort, quickSort, sort, heapSort } = require('.')
const { generateArr, validateSortedArr } = require('../../utils')

function print(arr, newArr, asc) {
  console.log('========= origin ===========')
  console.log(arr)
  console.log('========= sorted ===========')
  console.log(newArr)
  console.log('========= result ===========')
  console.log(validateSortedArr(newArr, asc))
}

function bubbleSortTest(asc = true) {
  // const arr = [8, 6, 2, 3, 1, 5, 7, 4]

  const arr = generateArr(10)
  const newArr = bubbleSort(arr, asc)
  print(arr, newArr, asc)
}

function selectionSortTest(asc = true) {
  // const arr = [8, 6, 2, 3, 1, 5, 7, 4]

  const arr = generateArr(10)
  const newArr = selectionSort(arr, asc)
  print(arr, newArr, asc)
}

function insertSortTest(asc = false) {
  // const arr = [8, 6, 2, 3, 1, 5, 7, 4]

  const arr = generateArr(10)
  const newArr = insertSortPro(arr, asc)
  print(arr, newArr, asc)
}

function mergeSortTest(asc = false) {
  const arr = generateArr(100)

  const newArr = mergeSort(arr, asc)
  print(arr, newArr, asc)
}

function quickSortTest(asc = true) {
  // const arr = [4, 6, 2, 3, 1, 5, 7, 8]
  const arr = generateArr(100)
  const newArr = quickSort(arr, asc)
  print(arr, newArr, asc)
}

function sortTest(asc = true) {
  const arr = generateArr(10000)
  // const arr = [4, 6, 2, 3, 1, 4, 5, 4, 7, 8]
  const newArr = sort(arr, asc)
  print(arr, newArr, asc)
}

function heapSortTest(asc = false) {
  const arr = generateArr(100)
  const newArr = heapSort(arr, asc)
  print(arr, newArr, asc)
}

function run() {
  // bubbleSortTest()
  // selectionSortTest()
  // insertSortTest()
  // mergeSortTest()
  // quickSortTest()
  // sortTest()
  // heapSortTest()
}

module.exports = {
  run
}