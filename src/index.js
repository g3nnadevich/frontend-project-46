import compareFiles from './compareFiles.js'
import parse from './parser.js'
import formatter from './Formatters/index.js'

import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const extension = path.extname(filepath).slice(1)
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absolutePath, 'utf-8')

  return parse(extension, data)
}

export default (filePath1, filePath2, format) => {
  const three = compareFiles(parseFile(filePath1), parseFile(filePath2))
  return formatter(three, format)
}
