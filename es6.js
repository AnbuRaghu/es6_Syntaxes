// var

var x=10;
console.log(x);
var x=20;
console.log(x);
var x=20;
function test(){
    var x=100;
    console.log('value od´f x iside function is '+x)
}
console.log('value value of x before declaration of function is '+x)
test();

//let
//let a=10;
//console.log(a);
let a=50;  //SyntaxError: Identifier 'a' has already been declared

console.log(a)
// const 

const c=0;
//const a=1;//SyntaxError: Identifier 'a' has already been declared
const b=[1,2];
b.push(3);// it sets b=[1,2,3]
b[3]=4;// it sets b=[1,2,3,4]

console.log(c,b)