const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

const config = require('./.env');


mongoose.connect(`mongodb://${config.username}:${config.password}@ds253889.mlab.com:53889/addressbook`, { useNewUrlParser: true });

//mongoose provides a constructor called Schema
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

const Person = mongoose.model('Person', personSchema);
const john = Person({
    firstname: 'John',
    lastname: 'Smith',
    address: '123 Bluejay Way'
});

// save the user
john.save(err => {
    if (err) throw err;

    console.log('person saved!');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St'
});

// save the user
jane.save(err => {
    if (err) throw err;

    console.log('person saved!');
})

const port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

// we are setting the file extension .ejs to the view engine
//view engine is a template engine with Express
app.set('view engine', 'ejs'); 

//it will call index.ejs
app.get('/', function(req, res, next) {
    res.render('index');
    console.log('Request url: ' + req.url);

    //get all the users
    Person.find({
        //specific queries could go here
    }, (err, users) => {
        if (err) throw err;

        //object of all the users
        console.log(users);
    });
     
    next();
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


