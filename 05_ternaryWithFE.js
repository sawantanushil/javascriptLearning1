var ternaryOprator=function(arg1,arg2){
    var result=arg1>arg2?`First Number is Greater than Second ${arg1}`:`Second Number is Greater then First ${arg2}`;
    console.log(result);

}
ternaryOprator(10,-10);
ternaryOprator(800,899);

console.log('====================================');
console.log("<<<<< New Progrm >>>>>");
console.log('====================================');

var evenOrOdd=function(arg1){
    var result=arg1%2==0? true : false;
    return result;

}
console.log(evenOrOdd(29));
console.log(evenOrOdd(44));
console.log(evenOrOdd(101));
console.log(evenOrOdd(0));

console.log('====================================');
console.log("<<<<< New Program >>>>>");
console.log('====================================');

var strEvenOrOdd=function(arg1){
var arg1Length=arg1.length;
var result=arg1Length%2==0?"Even":"Odd";
return result;
}
console.log(strEvenOrOdd("Javascript"));
console.log(strEvenOrOdd("Developer"));
console.log(strEvenOrOdd("Google"));

