const { readFile, writeFile } = require('fs');

console.log('start - 11');

//This is callback hell don't do this, Fix this by using Prommises or async + await
//Node.js is single threaded event loop based model so it's better to use async calls to keep clients from waiting
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return;
    }
    const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}\n`,
            {flag: 'a'},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with writing the file');
            }
        )
    })
})
console.log('starting the next task');