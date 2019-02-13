const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //http request starts with whats in the head - status code + headers & MIME types
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // send the body w/ carriage return to represent end of data
    const html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);
    // where does Node map to port? the .listen method below
}).listen(1337, '127.0.0.1');

// in terminal run $ node app.js
// 'hello world' will be printed to browser when you go to <localhost:1337>
