var wordlengthsquare=function(arg1){
    var argLength=arg1.length;
    console.log(argLength);
  return argLength*argLength;
  

}
console.log(wordlengthsquare("Javascript"));
console.log(wordlengthsquare("Google"));
console.log(wordlengthsquare("Developer"));

console.log('====================================');
console.log("<<<<< New Program >>>>>");
console.log('====================================');

function demoString(){
    var strs="I am Angular Developer";
   var strLength= strs.length;
    console.log(`"Total number of String Charater is:${strLength}"`);
    console.log(strs.split(" "));
   var result= strLength/4;
   console.log(`Total number of words (4) divid  by strLength equal to :${result}`);
   var result2=strLength*4;
   console.log(`Total number of words (4) multiplie by strLength equal to :${result2}`);
}
demoString();

