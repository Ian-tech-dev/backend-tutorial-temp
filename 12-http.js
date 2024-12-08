const http = require('http');

//create server
//the callback takes two arguments, both objects
//the req is the request being sent by the client to
//the server
//the res is what the server gives back as the response
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to our homepage');
    }
    if(req.url ==='/about'){
        res.end('Here is our short history');
    }else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `);
    }
    
    
});


server.listen(5000);