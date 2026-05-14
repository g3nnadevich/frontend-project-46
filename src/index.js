import parse from './parses.js'
import compareFiles from './compareFiles.js'
import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const extension = path.extname(filepath).slice(1)
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absolutePath, 'utf-8')
  
  return parse(extension, data)
}

export default (filePath1, filePath2) => {
  return compareFiles(parseFile(filePath1), parseFile(filePath2))
}