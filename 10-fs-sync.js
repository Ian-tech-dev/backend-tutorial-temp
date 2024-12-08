const {readFileSync,writeFileSync} = require('fs')
console.log("Start");
//read from the filesystem
//path to the existing file
//encoding
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second);
//passing the append flag 'a' appends to the existing file
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'})
console.log("Done with this task");
console.log("Starting the next one");