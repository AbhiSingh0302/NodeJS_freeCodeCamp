const {readFile,writeFile} = require('fs');
const utils = require('util');

const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile);

const start = async () => {
    try{
        const first = await readFilePromise('./content/first.txt','utf-8');
        const second = await readFilePromise('./content/sec.txt','utf-8');
        await writeFilePromise('./content/resultUtil.txt',
        `Hello welcome ${first} and ${second} in resultUtil`);
        console.log(first,second);
    }catch(err){
        console.log(err);
    }
}
start();