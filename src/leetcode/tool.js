const fs = require('fs')
const path = require('path')

// const dir = path.join(__dirname, 'easy')
// const filenames = fs.readdirSync(dir)
// console.log(filenames)
// filenames.forEach(filename => {
//   // fs.renameSync(path.join(dir, filename), path.join(dir, `easy-${filename}`))
//   const newFilename = filename.split('.')[0].replace('c', '') + '-easy.js'
//   fs.renameSync(path.join(dir, filename), path.join(dir, newFilename))
// })

const dir = path.join(__dirname)
const fileDirs = fs.readdirSync(dir)

// 看看我做了多少题
function calDoneSubjects() {
  const dirnames = ['subjects']
  const subjectsDirs = fileDirs.filter(dir => dirnames.includes(dir))

  let count = 0
  subjectsDirs.forEach(subjectsDir => {
    const curDirPath = path.join(dir, subjectsDir)
    const codeDirs = fs.readdirSync(curDirPath)
    codeDirs.forEach(codeDir => {
      const codeFiles = fs.readdirSync(path.join(curDirPath, codeDir))
      count += codeFiles.length
    })
  })
  
  console.log('已经做了' + count + '条题')
}

calDoneSubjects()
