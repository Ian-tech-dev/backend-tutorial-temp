const path = require('path')

//prints the path separator for the machine
console.log(path.sep)


const filePath = path.join('\\content','subfolder','test.txt')
console.log(filePath);


//when only concerned with the last portion of filepath
const base = path.basename(filePath)
console.log(base);
//return an absolute path with path.resolve
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);
 