var x=new Set();
x.add(0);
x.add(3);
x.add(3);//it get ignored (duplicate)
x.add('text');
var y={a:7,b:5};
x.add(y);
console.log(x);

