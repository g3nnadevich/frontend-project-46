import _ from 'lodash'

const INDENT_SIZE = 4
const SIGN_OFFSET = 2

const getDiffIndent = (depth) =>
  ' '.repeat(depth * INDENT_SIZE - SIGN_OFFSET)

const baseIndent = (depth) =>
  ' '.repeat(depth * INDENT_SIZE)

const closeIndent = (depth) =>
  ' '.repeat(depth * INDENT_SIZE - INDENT_SIZE)

const formatString = (string, depth) => ["{", ...string, `${closeIndent(depth)}}`].join("\n")

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value)
  }
  const lines = Object.entries(value).map(([key, value]) => {
    return `${baseIndent(depth)}${key}: ${stringify(value, depth + 1)}`
  })
  return formatString(lines, depth)
}

const formatter = (three) => {
  const iter = (node, depth = 1) => {
    switch(node.type) {
      case 'root': {
        const result = node.children.flatMap(child => iter(child, depth))
        return formatString(result, depth)
      }
      case "unchanged": {
        return `${getDiffIndent(depth)}  ${node.name}: ${stringify(node.value, depth + 1)}`
      }
      case "changed": {
        return `${getDiffIndent(depth)}- ${node.name}: ${stringify(node.oldValue, depth + 1)}\n${getDiffIndent(depth)}+ ${node.name}: ${stringify(node.newValue, depth + 1)}`
      }
      case "added": {
        return `${getDiffIndent(depth)}+ ${node.name}: ${stringify(node.value, depth + 1)}`
      }
      case "removed": {
        return `${getDiffIndent(depth)}- ${node.name}: ${stringify(node.value, depth + 1)}`
      }
      case "nested": {
        const result = node.children.flatMap(child => iter(child, depth + 1))
        return `${getDiffIndent(depth)}  ${node.name}: ${formatString(result, depth + 1)}`
      }
    }
  }
  return iter(three)
}

export default formatter