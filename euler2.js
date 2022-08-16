// ******************** Summarize ********************

// create an array of values based on Fibonacci sequence, starting with one and two
    // add two values of the 
// sum all even values of the sequence
// terms of sequence can not exceed 4 million
// ***************************************************



// ******************** Example **********************

// [1,2,3,5,8,13,21,34,55,89] sumOfEvenNums = 44

// ***************************************************



// ******************** Approach ********************

// this is a loop and happens as long as i != 4 million
// initial arr = [1,2]
// slice array and reduce 
// push new value to the end of initial array
    // arr.push(newElementAtEndOfArray)
// find the sum of the even-valued terms
    // get the even numbers and set them as an array to the variable even
    // const even = arr.filter(i => {
        // return i % 2 === 0;
    // });
    // return the sum of all the even numbers
    // even.reduce(reducer)



function reducer(previousValue, currentValue, index) {
    const total = previousValue + currentValue;
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${total}`);
    return total
}

let arr = [1,2]
let arrInit = [1,2,3,5] 


// will not iterate over each number; should i = 1?
const Fibonacci = (arr) => {
    // continue to do this until the last number of the array is <= 4 mil
    let highest = arrInit.slice(-1)
    while (highest <= 4000000000) {
        // set the last two items of arrInit as an array to the variable slicedArr
        let slicedArr = arrInit.slice(-2)
        // get the sum of the newly created array
        let newNum = slicedArr.reduce(reducer);
        // add new value to array
        newNum < 4000000000 ? arrInit.push(newNum) : null
        // update highest
        highest = newNum;    
    }
    const even = arrInit.filter(i => {
        return i % 2 === 0;
    });
    console.log("even #: ", even.reduce(reducer))
    console.log("array: ", arrInit)
    even.reduce(reducer);
}
// **************************************************



// ********************** Test **********************
// Fibonacci(arrInit);
console.time('Fibonacci @ length 4')
Fibonacci(arrInit);
console.timeEnd('Fibonacci @ length 4')

// console.time('Fibonacci @ length 2')
// Fibonacci(arr);
// console.timeEnd('Fibonacci @ length 2')

// ***************************************************