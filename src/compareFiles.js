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
  return result;
}

export default compareFiles;

/* 
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}

{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}

*/