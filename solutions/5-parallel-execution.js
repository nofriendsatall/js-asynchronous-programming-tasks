import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirpath, callback) => {
    fs.readdir(dirpath, (readErr, files) => {
      if (readErr) {
        callback(readErr);
        return;
      }
  
      async.map(
        files,
        (file, mapCallback) => {
          const filePath = path.join(dirpath, file);
          fs.stat(filePath, (statErr, stats) => {
            if (statErr) {
              mapCallback(statErr);
              return;
            }
            mapCallback(null, stats.isFile() ? stats.size : 0);
          });
        },
        (mapErr, results) => {
          if (mapErr) {
            callback(mapErr);
            return;
          }
          const totalSize = _.sum(results);
          callback(null, totalSize);
        }
      );
    });
  };
// END
