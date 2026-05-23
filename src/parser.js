import yaml from 'js-yaml'

export default (extension, data) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data)
    case 'yaml':
    case 'yml':
      return yaml.load(data)
    default:
      console.log(`Incorrect file extension: ${extension}`)
  }
}


