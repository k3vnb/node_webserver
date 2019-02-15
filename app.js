const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

// we are setting the file extension .ejs to the view engine
app.set('view engine', 'ejs'); 

//it will call index.ejs
app.get('/', function(req, res) {
    res.render('index')
});


app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id })
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.listen(port);


