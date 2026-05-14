import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/index'

const files = [
  ['json', 'file_1.json', 'file_2.json'],
  ['yaml', 'file_1.yaml', 'file_2.yaml'],
  ['yml', 'file_1.yml', 'file_2.yml']
]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8')

test.each(files)('gendiff flat %s', (_, filename1, filename2) => {
  const expected = readFile('expected_flat.txt').trim()
  const result = genDiff(getFixturePath(filename1), getFixturePath(filename2))
  expect(result).toBe(expected)
})