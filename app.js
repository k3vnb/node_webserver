const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

// we are setting the file extension .ejs to the view engine
//view engine is a template engine with Express
app.set('view engine', 'ejs'); 

//it will call index.ejs
app.get('/', function(req, res) {
    res.render('index')
});


app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id })
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body);
    // console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thanks for the JSON data!');
    console.log(req.body);

})

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.listen(port);


