//number function
let value=5
//const myfunc=()=>{return 5};
const myfunc=()=> value
console.log(myfunc());

// array function
let myarray=[1,2,3,4]
const myfunctwo=()=>{return myarray}
//const myfunctwo=()=>myarray
console.log(myfunctwo());

//object function
let myobj={a:1,b:3,c:4}
//const myfuncthree=()=>{return myobj}
const myfuncthree=()=>myobj
console.log(myfuncthree());
//
//const calcArea=(radius)=>{ return Math.PI*radius*radius};
const calcArea=(radius)=> Math.PI*radius*radius;
console.log(calcArea(4));

// extracting object values
var obj={w:1,x:3,y:5,z:30};
var{w,x,y,z}=obj;
console.log(obj)
console.log(w,x)
 // merging object with spread oprator
 var obj1={a:1,b:3,c:4};
 var obj2={c:4,r:5,z:50}

//es5 way
//var obj3=Object.assign(obj1,obj2);
//console.log(obj3)
 
// es6 way

var obj3={...obj1,...obj2}
console.log(obj3);
//object declaration
var name='Anbu';
var city='Colombo';
var objcity={name,city};
console.log(objcity);
// temperal literal
console.log(`Hello ${name} Welcome to ${city}`)