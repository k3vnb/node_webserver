const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send(`<html><head></head><body><h1>HelloWorld!</h1></body>`)
})

app.listen(port);


