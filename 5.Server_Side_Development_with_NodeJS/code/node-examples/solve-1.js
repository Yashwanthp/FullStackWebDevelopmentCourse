// Converting simplerect.js into node module.
var rect = require('./rectangle-1.js');

function solveRect(l,b){
    if(l<0 || b<0){
        console.log("values should be greater than zero. l:" + l + ",b:" + b)
    }else{
        console.log("Area of rectangle is: " + rect.area(l,b) + " and perimeter of rectangle is: " + rect.perimeter(l,b));
    }
}

solveRect(2,3);
solveRect(5,6);
solveRect(-3,2);

// rect.rectangle(l,b,function(err,rectangle){
//     if(err){

//     }else{

//     }
// })