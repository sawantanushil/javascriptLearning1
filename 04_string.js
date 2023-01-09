var greet="Good Morning";
console.log(greet);
var count=greet.length;
console.log(count);

console.log(" <<<<<< charAt() >>>>>>");
var char_8=greet.charAt(8);
console.log(char_8);
console.log(" <<<<<< indexOf() >>>>>>");

console.log(greet.indexOf("M"));

console.log(" <<<<<< concat() >>>>>>");

var fName="Virat";
var lName="Kholi";
result=fName.concat(" ","Daddy"," ",lName);// concatination of two elements or string
console.log(result);


console.log(" <<<<<< LastIndexOf >>>>>>");
var result="A dev knows dev";
console.log(result.lastIndexOf("dev"));

console.log(" <<<<<< replace() >>>>>>");
var greet="Good Moring guys";
console.log(greet.replace("Moring","Evening"));

console.log(" <<<<<< toUpperCase() >>>>>>");
var toUpperCaseString="my name is anushil sawant";
var result=toUpperCaseString.toUpperCase();
console.log(result);

console.log(" <<<<<< toLowerCase() >>>>>>");
var toLowerCaseString="MY NAME IS ANUSHIL SAWANT"
var result=toLowerCaseString.toLowerCase();
console.log(result);

console.log(" <<<<<< trim() >>>>>>");
var greet="    Namsete! Welcome to Mumbai     ";
console.log(greet);
console.log(greet.length);
trimResult=greet.trim();
console.log(trimResult);
console.log(trimResult.length);

var includes="good morning boys and girls"
console.log(includes.includes("boys"));
console.log(" <<<<<< substring() >>>>>>");

var substring1="Good Morning Dear Friends";
result=substring1.substring(9)
console.log(result);

console.log(" <<<<<< splite() >>>>>>");


var student="Anushil,Rahul,Yogesh,Amol,Swapnil";
var spliteResult=student.split(",");
console.log(spliteResult);

var myqote=`"Do or Die this attitude is important for this training"`;
console.log(myqote);

