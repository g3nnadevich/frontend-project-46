import stylishFormatter from "./stylish.js"
import plainFormatter from "./plain.js"

const formatter = {
    stylish: stylishFormatter,
    plain: plainFormatter,
    json: JSON.stringify,
}

export default (three, format) => formatter[format](three)