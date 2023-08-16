const http = require('http');

//Creating WebServer
const Server = http.createServer((req, res) => {
    // console.log(req);
    res.end("Hello Avinash, this is from the WebServer!!!");
});

//Listener
Server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the port 8000!!😃");
})