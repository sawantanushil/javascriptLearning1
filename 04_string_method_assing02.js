function funStringAssing() {
    var string1 = `     "Hey you are doing good, keep it up"     `;
    console.log(string1);
    console.log(`"Total length of string is :${string1.length}"`);
    var string2 = string1.trim();
    console.log(string2);
    console.log(`"Total length of string is:${string2.length}"`);
    var indexofStr = string2.charAt(1);
    console.log(indexofStr);
    console.log(string2.split(" "));
    console.log(string2.substring(19, 23));
    console.log(string2.substring(22));
    console.log(string2.includes("up"));
}
funStringAssing();