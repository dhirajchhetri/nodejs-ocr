'use strict'

const argv = require('yargs').alias('i', 'imgPath').argv
const fs = require('fs-extra')
const path = require('path')
const image = path.resolve(__dirname, argv.imgPath)

require('tesseract.js')
  .recognize(image)
  .progress(info => {
    console.log(info)
  })
  .then(data => {
    console.log(data.text)
    fs.writeFileSync('out.txt', data.text)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(e => {
    console.log('Done!')
    process.exit()
  })
