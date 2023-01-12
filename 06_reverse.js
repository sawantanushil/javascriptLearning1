var myString = "Anushil";
var lenString = myString.length - 1;
var strrev = "";
for (let index = lenString; index >= 0; index--) {
    //console.log(myString.charAt(index));
    strrev = strrev + myString.charAt(index);

}
console.log(strrev);


//WAP 0+1+2+3+4+5

var add=0;
for (let index = 0; index < 6; index++) {
    add=add+index;
    
}
console.log(add);
