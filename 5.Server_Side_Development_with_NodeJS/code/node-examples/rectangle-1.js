// Converting simplerect.js into node module.

exports.area = (x,y) => x*y;
exports.perimeter = (x,y) => 2*x*y;


// exports.rectangle = (x,y,callback) => {
//     if(x<0 || y<0){

//     }else{
//         callback(null,{
//             perimeter:(x,y) => 2*x*y,
//             area: (x,y) => x*y
//         })
//     }
// }
