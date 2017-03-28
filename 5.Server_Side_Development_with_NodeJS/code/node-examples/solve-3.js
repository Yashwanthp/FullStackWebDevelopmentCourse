var argv = require('yargs')
            .usage('Usage: node $0 ==l=[num] --b=[num]')
            .demand(['l','b'])
            .argv;  // argv is JS object what is supplied to the application. Here if we say --l=2, then argv.l is set to 2. Similarly to argv.b

var rect = require('./rectangle-2');

function solveRect(l,b){
    rect(l,b,function(err,rectangle){
        if(err){
            console.log(err);
        }
        else{
            console.log("Area: " + rectangle.area() + "Perimeter: " + rectangle.perimeter());
        }
    });
};

solveRect(argv.l, argv.b);