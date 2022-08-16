// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.



// ******************** Summarize ********************

// create a function that counts the number of vowels in a string

// ***************************************************


// ******************** Example **********************

    // countVowelsEx('Four score and seven years'); // => 9
    // countVowelsEx('Today is Tuesday!'): // => 6

// ***************************************************


// ******************** Approach ********************

// non-recursive
// const vowelCount = (str) => {
//     let vowels = /[aeiou]/gi;
//     let result = str.match(vowels);
//     console.log("Result: ", result)
//     let count = result.length;
//     console.log("Count: ", count);
// }

// // vowelCount('pAper');

// recursive
const countVowels = (str, count = 0) => {
    // base case or string.length === 0
    if (str === '') {
        // console.log("This is the string: ", str)
        return count;
    }

    str = str.toLowerCase();
    // recursive case
    const newString = str.substring(1) 
    console.log("New string: ", newString)
    console.log(typeof newString);
    // first letter of the string
    let text = str.charAt(0);
    console.log("Text: ", text);
    // check if text is a vowel
    if (text == 'a' || text == 'e' || text == 'i' || text == 'o' || text == 'u') {
        // if the first letter of the string is a vowel, add 1 to count and return count
        count += 1
        console.log("Vowel count: ", count)
        return countVowels(newString, count) 
    } else {
        count += 0
        console.log("Vowel count: ", count)
        return countVowels(newString, count) 
    }
}

let test = countVowels('eating');
console.log("return: ", test);

// **************************************************


// ********************** Test **********************
let test1 = count

// ***************************************************