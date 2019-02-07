//function statement

function greet(){
    console.log('hi');
}

greet();

//functions are first-class
function logGreeting(fn){
    fn();
}

logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hi You');
}

greetMe();

//it's first class
logGreeting(greetMe);

var helloModule = function(){
    console.log('Hello Module!');
}

module.exports = helloModule;