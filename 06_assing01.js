function reverseString(arg1) {
    var revr="";
    var test=arg1.length-1;
    for (let index =arg1.length-1 ; index >=0; index--) {
        var ch=arg1.charAt(index)
        //console.log(ch);
        revr=revr+arg1.charAt(index);
        
    }
    console.log(revr);
}
reverseString("Soon I will be Angular IT Champ");
reverseString("Hard work always pay back");