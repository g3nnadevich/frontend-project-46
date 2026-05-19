import stylishFormatter from "./stylish.js"

const formatter = {
    stylish: stylishFormatter,
}

export default (format, three) => formatter[format](three)