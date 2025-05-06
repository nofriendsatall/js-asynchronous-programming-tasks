import fs from 'fs';

// BEGIN

export default function watch(filepath, interval, callback) {
  fs.stat(filepath, (err) => {
    if (err) {
      return callback(err); 
    }

    let lastMtime = null;

    const timerId = setInterval(() => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          return callback(err); 
        }

        if (lastMtime && lastMtime < stats.mtime) {
          callback(null); 
        }

        lastMtime = stats.mtime; 
      });
    }, interval);

    
    return () => clearInterval(timerId);
  });
}


// END



