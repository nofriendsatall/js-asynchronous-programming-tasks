import fs from 'fs';

// BEGIN
export default function print(filepath) {
    const callback = (error,data) => console.log(data);

    const fileContent = fs.readFile(filepath,'utf-8',callback)
}
// END
