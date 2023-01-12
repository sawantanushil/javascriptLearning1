var myString="Good Morning IT Champ";
var count=0;
var strLength=myString.length;
for (let index = 0; index < strLength; index++) {
    var ch=myString.charAt(index);
    var chh=ch.toLowerCase();
    if(chh=="a"||chh=="e"||chh=="i"||chh=="o"||chh=="u"){
        console.log(chh);
        var result=chh.length;
        count=count+result;
       
    
    }
    
    
}

//console.log(chh);
console.log(`Total Number Of Vowels is : ${count}`);

console.log('====================================');
console.log(`<<<<< New Program sum the 1 to 10 number >>>>>`);
console.log('====================================');

var sumOfNo=function (params) {
    var num1=0;
    for (let index = 0; index <10; index++) {
        num1=num1+index;

    }
    console.log(num1);
}
sumOfNo();

console.log('====================================');
console.log(`<<<<< New Program Sum of 1 to 5 >>>>>`);
console.log('====================================');

var numSum=1;
for (let index = 1; index < 5; index++) {
    
    sum=sum+index;
    
}
console.log(numSum);