const http = require('http');
const url = require('url');
const fs = require('fs');


const path = "C:/Users/2165362/OneDrive - Cognizant/Desktop/Programmes/NodeJs Learnings/complete-node-bootcamp/1-node-farm/final/dev-data/";

//const path_pc =  "C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/dev-data/";


const data = fs.readFileSync(path + `data.json`, `utf-8`);
const dataObj = JSON.parse(data)

//Creating WebServer
const Server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url)

    const pathName = req.url
    if (pathName === "/") {
        res.end("Hello Avinash, this is from the WebServer!!!");
    }

    //HOME OR OVERVIEW
    else if (pathName === "/home" || pathName === "/overview"){
        res.end("Hello Viewer, you've entered the HomePage!");
    }

    //PRODUCT
    else if (pathName === "/product"){
        res.end("Congratulations!! You've entered the nothing zone!!!")
    }

    //API
    else if (pathName === "/api"){
        res.writeHead(200, {'Content-type' : 'application/json'})
        res.end(data);
    }

    //NOT FOUND
    else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'Hello World'
        });
        res.end("You gone into VOID!!!");
    }
    
    
});

//Listener
Server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the port 8000!!😃");
})