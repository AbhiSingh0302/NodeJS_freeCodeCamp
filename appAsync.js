const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf-8',(err,result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

const start = async () => {
    try{
        const first = await getText('./content/first.txt');
        const second = await getText('./content/sec.txt');
        console.log(first," and ",second);
    }catch(error){
        console.log(error);
    }
}

start();