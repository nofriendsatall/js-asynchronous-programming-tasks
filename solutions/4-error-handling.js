import fs from 'fs';

// BEGIN

export const move = (sourcePath, destPath, callback) => {
  fs.readFile(sourcePath, (readError, data) => {
    if (readError) {
      callback(readError);
      return;
    }

    fs.writeFile(destPath, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }

      fs.unlink(sourcePath, (unlinkError) => {
          callback(unlinkError);
        })
      })
    })
}

// END
