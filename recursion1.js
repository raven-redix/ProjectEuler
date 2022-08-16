// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

// sumNums(3); // => 6 (3 + 2 + 1)

// ******************** Summarize ********************

// function that takes a value(num) and returns the sum of all numbers from 1 to num(the specified value)

// ***************************************************

// ******************** Example **********************
    // sumNumsEx(3); // => 6 (3 + 2 + 1)
    // sumNumsEx(10); // => 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 +1)
    // sumNumsEx(12) // => 55 (12 + 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 +1)


// ***************************************************

// ******************** Approach ********************
//non-recursive
function reducer(previousValue, currentValue, index) {
    const total = previousValue + currentValue;
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${total}`);
    return total
}

function getTotal(num) {
    // definining the variable that will hold the sum of all numbers
    let total = 0 + num;
    // takes the given number and get all numbers between 1 and num
    const array = [...Array(num).keys()]
    console.log(array)
    // add each number to a total
    // get total of numbers in array
    total += array.reduce(reducer)
    console.log(total)
}

getTotal(10);

// recursive
function sumNumsEx(num, total=0) {
    // base case: num is 0 or 1
    if (num <= 1) {
        console.log(num);
        return num;
    }
    // recursive case: num must get closer to 0 or 1
    total = num + sumNumsEx(num - 1);
    console.log(num)
    return total;
}

// ***************************************************


// ********************** Test **********************
let baseTest = sumNumsEx(0);
console.log("Total Sum: ", baseTest);

let test0 = sumNumsEx(3);
console.log("Total Sum: ", test0);

let test1 = sumNumsEx(10);
console.log("Total Sum: ", test1);

let test2 = sumNumsEx(12);
console.log("Total Sum: ", test2);

// ***************************************************