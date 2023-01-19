function evenPostionedChars(myString) {
    var strLength=myString.length;
    for (let index = 0; index <strLength; index++) {
        var ch=myString.charAt(index);
         if(index%2==0 && ch!=" "){
            console.log(ch);
         }
    }

    
}
evenPostionedChars("Hard work always pay back");
evenPostionedChars("Soon I will be Anguler IT Champ");