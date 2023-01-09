var square = function (arg1) {
  result = arg1 * arg1;
  console.log("Square of", result);
};
square(5);
square(6);
square(25);
square(100);
console.log(typeof square);
console.log("<<<<< New Progaram Area of Trngale >>>>>");

function areOfTrangle(base, height) {
  var result = (base * height) / 2;
  console.log("Area of Trange is", result);
}
areOfTrangle(45, 34);

console.log("<<<<< New Program If no is Positive ,Negative or Zero >>>>>");

var IsPositiveOrNegative = function (arg1) {
  if (arg1 >= 1) {
    console.log("Number is Positive", arg1);
  } else if (arg1 <= -1) {
    console.log("Number is Negative", arg1);
  } else if (arg1 == 0) {
    console.log("Number is Zero");
  }
};
IsPositiveOrNegative(20);
IsPositiveOrNegative(-20);
IsPositiveOrNegative(00);

console.log("<<<<< New Program Largest number of Three numbers >>>>>");

var largestNumber = function (arg1, arg2, arg3) {
  if (arg1 >= arg2 && arg1 >= arg3) {
    console.log("Largest Number is ", arg1);
  } else if (arg2 >= arg1 && arg2 >= arg3) {
    console.log("Largest Number is ", arg2);
  } else if (arg3 >= arg1 && arg3 >= arg2) {
    console.log("Largest Number is", arg3);
  }
}
largestNumber(76,786,999);

console.log("<<<<< New Program Variable is undefined or Null >>>>>");

var IsundefinedOrNull=function(Ismarried,fName,lName){
console.log(lName,fName,Ismarried);
}
IsundefinedOrNull("yes",null)

console.log("<<<<< New Program Leap year or Not >>>>>");

var leapOrNot=function(arg1){

 if(arg1%4==0){
    console.log("This is Leap Year",arg1);
 }else{
    console.log("This is Not a Leap Year",arg1);
 }

}
leapOrNot(2020);
leapOrNot(1999);
leapOrNot(2022);



