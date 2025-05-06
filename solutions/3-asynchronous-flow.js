import fs from 'fs';

// BEGIN
export function compareFileSizes(file1, file2, callback) {
  fs.stat(file1, (err1, stats1) => {
    if (err1) {
      callback(err1);
      return;
    }

    fs.stat(file2, (err2, stats2) => {
      if (err2) {
        callback(err2);
        return;
      }

      const result = Math.sign(stats1.size - stats2.size);
      callback(null, result);
    });
  });
}
// END