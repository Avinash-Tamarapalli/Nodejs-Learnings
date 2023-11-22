// const greets = "hello"

// console.log(greets)


// const http = require('http');
// const url = require('url');
const fs = require('fs');


const path = "C:/Users/2165362/OneDrive - Cognizant/Desktop/Programmes/NodeJs Learnings/complete-node-bootcamp/1-node-farm/final/dev-data/";

const path_pc =  "C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/dev-data/";

fs.readFile(path + `data.json` , `utf-8`, (err,data) => {
    if (err) {
        console.error(err);
        return;
      }
    const Pdata = JSON.parse(data);
    console.log(Pdata);
})


