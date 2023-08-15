// Blocking or Synchronous Code

const fs = require('fs');


// const path = 'C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/txt/append.txt';

// const textfile = fs.readFileSync(path,'utf-8')

// // console.log(textfile)


// const textOut = `This is what we know about Avacado:\n ${textfile}.\n Created at ${Date.now()}`;
// fs.writeFileSync("./output.txt",textOut)

// console.log("File being written");

// // console.log("Hello Avinash")

// Non-Blocking or Asynchronous Code

const path = "C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/txt/";

fs.readFile(path + `start.txt`, 'utf-8', (err,text1) => {
    //fs.readFile(path + ${text1} +`.txt`, 'utf-8', (err,text2) it is wrong!!! Do this
    fs.readFile(path + text1.trim() +`.txt`, 'utf-8', (err,text2) => {
        // console.log(text2);
        fs.readFile(path +`append.txt`, 'utf-8',(err,text3) => {
            //fs.writeFile('./output.txt',text2 + text3 ,'utf-8',(err) =>
            fs.writeFile('./output.txt',`${text2}\n${text3}`,'utf-8',(err) => {
                if (err) throw err;
                    console.log('The file has been saved!');
                    
            })
        })
    })
})
 console.log("Will it be printed first?");
 fs.readFile('./output.txt', 'utf-8', (err,data) => {
    console.log(data);
 })

 //Tutor's cheppinattu!!
//  fs.readFile(`C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/txt/start.txt`, 'utf-8', (err,data1) => {
//     fs.readFile(`C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/txt/${data1}.txt`, 'utf-8', (err,data2) => {
//         console.log(data2)
//     })
//  })