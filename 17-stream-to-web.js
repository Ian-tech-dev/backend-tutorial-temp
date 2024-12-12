const http =require('http')
const {createReadStream,readFileSync} = require('fs')


const server = http.createServer((req,res)=>{
    // const data = readFileSync('./content/big.txt',{encoding:'utf-8'})
    // res.end(data)
    const fileStream = createReadStream('./content/big.txt',{encoding:'utf-8'})
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})

server.listen(8000)

//const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf-8'})

//default 64KB chunks
//last buffer -remainder 
//const stream = createReadStream('./content/big.txt',{highWaterMark:90000})


// stream.on('data',(result)=>{
//     console.log(result)
// })

// stream.on('error',(err)=>{
//     console.log(err.message);
// })