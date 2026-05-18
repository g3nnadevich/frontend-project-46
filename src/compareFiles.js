import _ from 'lodash'

const compareFiles = (file1, file2) => {
  const keys1 = Object.keys(file1)
  const keys2 = Object.keys(file2)
  const sortedKeys = _.sortBy(_.union(keys1, keys2))

  const result = sortedKeys.map((key) => {
    if(!_.has(file1, key)) {
      return {
        name: key,
        value: file2[key],
        type: 'added',
      }
    }
    if(!_.has(file2, key)) {
      return {
        name: key,
        value: file1[key],
        type: 'removed',
      }
    }
    if(_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return {
        name: key,
        children: compareFiles(file1[key], file2[key]),
        type: 'nested',
      }
    }
    if(file1[key] !== file2[key]) {
      return {
        name: key,
        oldValue: file1[key],
        newValue: file2[key],
        type: 'changed',
      }
    }
    return {
      name: key,
      value: file1[key],
      type: 'unchanged',
    }
  })
  return result
}

const getDiffTree = (file1, file2) => ({
  type: 'root',
  children: compareFiles(file1, file2),
})

export default getDiffTree
