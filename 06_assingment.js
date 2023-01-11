console.log(0==``);
console.log(0==`0`);
console.log(0==false);
console.log(null==undefined);
console.log(1==[1]);
console.log(1==true);
console.log(1==`1`);


var largestNumber=function(arg1,arg2,arg3){
    if(arg1>=arg2&&arg1>=arg3){
        console.log(`First Number is Greater than Number 2 and 3 ${arg1}`);
    } else if(arg2>=arg1&&arg2>=arg3){
        console.log(`Second Number is Greater than Number 1 and 3 ${arg2}`);

    }else{
        console.log(`Third Number is Greater than Number 1 and 2 ${arg3}`);
        
    }

}
largestNumber(50,100,300);
largestNumber(500,100,300);
largestNumber(50,1000,300);




