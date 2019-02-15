const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/'){
        //http request starts with whats in the head - status code + headers & MIME types
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // send the body w/ carriage return to represent end of data
        fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
    }

    else if (req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }

   else { res.writeHead(404, { 'Content-Type': 'text/html' });
   // send the body w/ carriage return to represent end of data
   fs.createReadStream(__dirname + '/error404.htm', 'utf8').pipe(res);;
   }

}).listen(1337, '127.0.0.1');

// in terminal run $ node app.js, go to <localhost:1337>


