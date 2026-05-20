const getValueToString = (value) => {
  switch (typeof value) {
    case 'object': {
      return !value ? 'null' : '[complex value]'
    }
    case 'string': {
      return `'${value}'`
    }
    default: {
      return `${value}`
    }
  }
}

const getPlainDiff = (tree) => {
  const iter = (node, path) => node.flatMap((child) => {
    const currentPath = [path, child.name].flat().join('.')
    switch(child.type) {
      case "added": {
          return `Property '${currentPath}' was added with value: ${getValueToString(child.value)}`
      }
      case "removed": {
          return `Property '${currentPath}' was removed`
      }
      case "changed": {
          return `Property '${currentPath}' was updated. From ${getValueToString(child.oldValue)} to ${getValueToString(child.newValue)}`
      }
      case "nested": {
          return iter(child.children, currentPath)
      }
      case "unchanged": {
          return []
      }
    }
  })
  return iter(tree.children, []).join("\n")
}

export default getPlainDiff
