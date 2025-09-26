import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        return `${key}: ${file1[key]}`;
      }
      return [`- ${key}: ${file1[key]}`, `+ ${key}: ${file2[key]}`];
    }
    if (_.has(file1, key)) {
      return `- ${key}: ${file1[key]}`;
    }
    return `+ ${key}: ${file2[key]}`;
  });

  return `{\n  ${result.join('\n  ')}\n}`;
};

export default compareFiles;
