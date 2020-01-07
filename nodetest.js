var word = "racecar"
var arrary = [1,2,3,4,"string1", false,]
function myfunct( string1) 
{
    console.log(string1)
    console.log("this is a string")
    console.log(4, "this is a number")
    console.log(true)
    console.log(arrary)
};


function pallindrome(string2)
{
    console.log(string2)
    console.log(typeof string2)
    var splitstring = string2.split("")
    console.log(splitstring)
    console.log(typeof splitstring)

    var reverseword = string2.split("").reverse().join("")
    console.log(reverseword)
    if(reverseword === string2)
    { 
        console.log("true")
        return true;
    }
    else
    {
        console.log("false")
        return false;
    }

}

const palindromeTwo = string => string.split('').reverse().join('');
const test = (word, palindromeTwo(word))
pallindrome(word);

console.log(palindromeTwo(word))

palindromeTwo(word);
console.log("-----------------------------------------------")
myfunct(word);
