function EvenOrOdd(arg1) {
 var result=arg1%2==0?`Even Number: ${arg1}`:`Odd  Number: ${arg1}`;
 return result;   
}
console.log(EvenOrOdd(45));
console.log(EvenOrOdd(70));
console.log(EvenOrOdd(67));
console.log(EvenOrOdd(98));

function IsEligibleOrNot(age) {
    if (age>=18) {
        console.log(`Your are Eligible for Vote`);
        
    }else{
        console.log(`Your are not Eligible for Vote`);
    }
    
}
IsEligibleOrNot(18);
IsEligibleOrNot(17);
IsEligibleOrNot(22);
IsEligibleOrNot(15);

