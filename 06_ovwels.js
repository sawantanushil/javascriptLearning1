var givenString = `I Love JavaScript`;
var strLength = givenString.length;
for (let index = 0; index < strLength; index++) {

    if (index % 2 == 0) {
        var charAt = (givenString.charAt(index));
        console.log(charAt);
    }
}

console.log('====================================');
console.log("<<<<< New Program Ovwels >>>>>");
console.log('====================================');

var newString = "I love JavaScript";
var strLength = newString.length;
for (let index = 0; index < strLength; index++) {
    var charAt = newString.charAt(index);
    var ch = charAt.toLowerCase()
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {

        console.log(ch);

    }

}