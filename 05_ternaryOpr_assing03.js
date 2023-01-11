function IsEligibleOrNot(age,gender) {
  var result=age>=21 && gender=="Male"?`Hey Boy you are Eligible for Marrige`
  :`You are not Eligible for Marrige `;
  return result;

}
console.log(IsEligibleOrNot(25,"Male"));
console.log(IsEligibleOrNot(27,"Female"));
console.log(IsEligibleOrNot(21,"Male"));
console.log(IsEligibleOrNot(20,"Male"));

console.log('====================================');
console.log(`<<<<< New Program >>>>>`);
console.log('====================================');

function IsEligibleOrNot(age,gender) {
    var result=age>=18 && gender=="Female"?`Hey Girl you are Eligible for Marrige`
    :`You are not Eligible for Marrige `;
    return result;
  
  }
  console.log(IsEligibleOrNot(25,"Female"));
  console.log(IsEligibleOrNot(17,"Female"));
  console.log(IsEligibleOrNot(21,"Female"));
  console.log(IsEligibleOrNot(20,"Male"));
  


