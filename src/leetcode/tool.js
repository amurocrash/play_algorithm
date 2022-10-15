const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'easy')
const filenames = fs.readdirSync(dir)
console.log(filenames)
filenames.forEach(filename => {
  // fs.renameSync(path.join(dir, filename), path.join(dir, `easy-${filename}`))
  const newFilename = filename.split('.')[0].replace('c', '') + '-easy.js'
  fs.renameSync(path.join(dir, filename), path.join(dir, newFilename))
})
