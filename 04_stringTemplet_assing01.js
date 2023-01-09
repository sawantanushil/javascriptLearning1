var stringTemplet =function(){
    var dreamCompany=`"My Dream Company is Bank Of America"`;
    console.log(dreamCompany);
    var hobby1="Playing Cricket";
    var hobby2="Watching Cricket";
    var hobby3="Bike Ridding";
    console.log(`"My Hobbies are: ${hobby1}"`);
    console.log(`"MY Hobbies are: ${hobby2}"`);
    console.log(`"MY Hobbies are: ${hobby3}"`);

    var hobbyConcat=hobby1.concat(" ," + hobby2 +" ,"+hobby3);
     console.log(hobbyConcat);
}
stringTemplet();