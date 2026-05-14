import parse from './parses.js'
import compareFiles from './compareFiles.js'

export default (filepath1, filepath2) => {
  const parsePath1 = parse(filepath1)
  const parsePath2 = parse(filepath2)

  return compareFiles(parsePath1, parsePath2)
}