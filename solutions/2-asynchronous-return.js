import fs, { write } from 'fs';

// BEGIN
export default function writeFunction(filepath,data,callbackOnSuccess){
    fs.writeFile(filepath,data,callbackOnSuccess)
}
// END