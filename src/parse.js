import fs from 'fs';

export default (filepath) => {
  const path = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(path);
};