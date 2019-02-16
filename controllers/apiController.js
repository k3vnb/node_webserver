module.exports = function(app){
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
    
    });
}