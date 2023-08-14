const fs = require('fs');


const path = 'C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/txt/append.txt';

const textfile = fs.readFileSync(path,'utf-8')

// console.log(textfile)


const textOut = `This is what we know about Avacado:\n ${textfile}.\n Created at ${Date.now()}`;
fs.writeFileSync("./output.txt",textOut)

console.log("File being written");

// console.log("Hello Avinash")