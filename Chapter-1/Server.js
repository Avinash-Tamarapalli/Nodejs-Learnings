const http = require('http');
const url = require('url');
const fs = require('fs');


const path = "C:/Users/2165362/OneDrive - Cognizant/Desktop/Programmes/NodeJs Learnings/complete-node-bootcamp/1-node-farm/final/dev-data/";

//const path_pc =  "C:/Users/Avinash/Desktop/NodeJs-bootcamp/complete-node-bootcamp/1-node-farm/final/dev-data/";


const tempOverview = fs.readFileSync(`${__dirname}/template-overview.html`, `utf-8`);
const tempProducts = fs.readFileSync(`${__dirname}/template-product.html`, `utf-8`);
const tempCards = fs.readFileSync(`${__dirname}/template-cards.html`, `utf-8`);


const data = fs.readFileSync(path + `data.json`, `utf-8`);
const dataObj = JSON.parse(data)

//Creating WebServer
const Server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url)

    const pathName = req.url
    
    //HOME OR OVERVIEW
    if (pathName === "/" || pathName === "/overview"){
        res.writeHead(200,{'Content' : 'text/html'})
        res.end(tempOverview);
    }

    //ABOUT
    else if (pathName === "/about") {
        res.end("Hello there!!! This is how you could contact us");
    }

    //PRODUCT
    else if (pathName === "/products"){
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