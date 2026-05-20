import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/index'

const files = [
  ['json', 'file_1.json', 'file_2.json'],
  ['yaml', 'file_1.yaml', 'file_2.yaml'],
  ['yml', 'file_1.yml', 'file_2.yml'],
]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8')

test.each(files)('gendiff flat %s', (_, filename1, filename2) => {
  const fixture1Path = getFixturePath(filename1)
  const fixture2Path = getFixturePath(filename2)

  const stylishExpected = readFile('expected_stylish.txt').trim()
  const plainExpected = readFile('expected_plain.txt').trim()
  const jsonExpected = readFile('expected_json.txt').trim()

  const stylishResult = genDiff(fixture1Path, fixture2Path, 'stylish')
  const plainResult = genDiff(fixture1Path, fixture2Path, 'plain')
  const jsonResult = genDiff(fixture1Path, fixture2Path, 'json')

  expect(stylishResult).toBe(stylishExpected)
  expect(plainResult).toBe(plainExpected)
  expect(jsonResult).toBe(jsonExpected)
})
