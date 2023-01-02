function java(){
    console.log("I love JavaScript");

}
java();


function angular(){
    console.log("I love Angular-8");
}
angular();

console.log("<<<<< New Program >>>>>");

function details(firstName,lastName){

    var result=firstName+lastName;
    console.log(result);

}
details("Aarti","Sawant");

console.log("<<<<< New Program >>>>>");

function swap_value(value1,value2){
         
    var value3;
    console.log("Before swapping value is ",value1,value2);
    value3=value1;
    value1=value2;
    value2=value3;
    console.log("After swapping value is ",value1,value2);

}

swap_value("Virat","Anushka");
swap_value(1000,2000);

console.log("<<<<< New Program >>>>>");

function addtion(arg1,arg2,arg3){
    console.log("Addtion of total arguments is",arg1,arg2,arg3);
    return arg1+arg2+arg3;

}

var result;
result =addtion(10.23,600,40);
var result1=addtion("Hello","Good","Morning");
console.log(result);
console.log(result1);

