import stylishFormatter from './stylish.js'
import plainFormatter from './plain.js'

export default (three, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormatter(three)
    case 'plain':
      return plainFormatter(three)
    case 'json':
      return JSON.stringify(three)
    default:
      throw new Error(`Unknown format: ${format}`)
  }
}