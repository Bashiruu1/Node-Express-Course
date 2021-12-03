const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); //content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base); //text.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //D:\source\repos\Node-Work\content\subfolder\test.txt
console.log(absolute);

