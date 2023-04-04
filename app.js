const http = require('http');

const server = http.createServer((req,res,next) => {
    if(req.url == '/'){
        res.end('Home Page');
    }
    else if(req.url == '/about'){
        //Blocking Code
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} and ${j}`);
            }
        }
        res.end('About Page!!');
    }
    else{
        res.end('Error');
    }

})

server.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
})