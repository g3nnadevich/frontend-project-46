import parse from './parse.js';
import compareFiles from './compareFiles.js';

const genDiff = (data1, data2) => {
  const parseData1 = parse(data1);
  const parseData2 = parse(data2);

  const result = compareFiles(parseData1, parseData2);
  return result;
};

export default genDiff;
