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
solveRect(10,8);
solveRect(-10,8);