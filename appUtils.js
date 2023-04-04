const {readFile,writeFile} = require('fs').promises;
// const utils = require('util');

// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/sec.txt','utf-8');
        await writeFile('./content/resultUtil.txt',
        `Hello welcome to promises, ${first} and ${second} in resultUtil`);
        console.log(first,second);
    }catch(err){
        console.log(err);
    }
}
start();