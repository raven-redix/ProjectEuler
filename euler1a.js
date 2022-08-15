// S -sum of multiples of 3 or 5 between 0 and 1000 non-inclusive

// E - sum of multiples of 3 or 5 below 10: [3,5,6.9] sum = 23
// sum of multiples of 3 or 5 below 20: [3,5,6,9,10,12,15,18] sum = 78

// below10 = 3+5+6+9
// below20 = 3+5+6+9+10+12+15+18
// console.log("Below 10: ", below10)
// console.log("Below20: ", below20)

// A - Write a function to find multiples.
// Make a loop from 0 to 1000. Maybe a nested loop?
// Only use whole numbers under 1000.
// Track all multiples to sum them?

// alternate approaches: maybe we can add numbers to an array with .push and map through and add with .reduce
// or How about just adding a pair of numbers and multiply the sum by the total number of groups by 2. Using a function.


// function to find multiples of 3 and 5
// takes int argument - range of numbers
function multiples_of_3_or_5(range){
    // accumulator variable
    let sum = 0;
    //loop for 3s
    for(let i=3;i<range;i+=3){
        //modulo operation returns 0 for multiples
        if(i%3==0){
            sum += i;
        }
    }
    //loop for 5s
    for(let i=5;i<range;i+=5){
        //modulo operation returns 0 for multiples
        //ignoring numbers already added (multiples of 3)
        if(i%5==0 && i%3!==0){
            sum += i;
        }
    }
    return sum;
}

//T compare output to test cases
let below10 = multiples_of_3_or_5(10);
console.log('Below 10: ', below10);
let below20 = multiples_of_3_or_5(20);
console.log('Below 20: ', below20);
let below1000 = multiples_of_3_or_5(1000);
console.log("Below 1000:", below1000);