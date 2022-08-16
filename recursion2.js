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
const countVowels = (str) => {
    // base case or string.length === 0
    if (str === '') {
        console.log("This is the string: ", str)
        return 0;
    }
    str = str.toLowerCase();
    console.log("This is it: ", str);
    console.log("This is the string: ", str)
    // recursive case
    // have a variable to store the vowels count
    let count = 0;
    // define vowels as an array
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // return countVowels(//with next character in the string?);
    
    //look at each letter in the string
    // remove it 
    const letter = str.substring(1) 
    console.log("Letter: ", letter)
    console.log(str);
    // and if it is a vowel add 1 to the count

    let text = str.charAt(0);
    console.log(text);
    // check if text is a vowel


    // countVowels(letter);
    

    // console.log("Result: ", result)
    // let count = result.length;
    // console.log("Count: ", count);
}

let test = countVowels('Paper');
console.log(test);

// program to count the number of vowels in a string

// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return count;
// }

// // take input

// const result = countVowel('paper');

// console.log(result);

// **************************************************

// countVowels(str)

// ********************** Test **********************


// ***************************************************