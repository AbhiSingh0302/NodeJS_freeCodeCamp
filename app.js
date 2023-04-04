const http = require('http');

const server = http.createServer((req,res,next) => {
    console.log('request event');
    res.end('Hello world!!');
})

server.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
})