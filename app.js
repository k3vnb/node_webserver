const http = require('http');

http.createServer((req, res) => {
    //http request starts with whats in the head - status code + headers & MIME types
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // send the body w/ carriage return to represent end of data
    res.end('Hello World\n');
    // where does Node map to port? the .listen method below
}).listen(1337, '127.0.0.1');


