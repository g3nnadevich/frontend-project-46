import stylishFormatter from "./stylish.js"

const formatter = {
    stylish: stylishFormatter,
}

export default (three, format) => formatter[format](three)