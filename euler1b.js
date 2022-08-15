// S -sum of multiples of 3 or 5 between 0 and 1000 non-inclusive

// E - sum of multiples of 3 or 5 below 10: [3,5,6.9] sum = 23
// sum of multiples of 3 or 5 below 20: [3,5,6,9,10,12,15,18] sum = 78

// A - Create an array with every number in the range
// reduce array, summing all multiples of 3 or 5

function sum_multiples_of_3_or_5(range){
    // create an empty array of the desired length
    let range = [... Array(range).keys()]

    // apply our reducer function
    let result = range.reduce(multiples);

    // add number to sum only if multiple of 3 or 5
    function multiples(total, num) {
        if (num%3==0 || num%5==0){
            total +=num
        }
    return total
    }
    console.log(result)
}

//T compare output to test cases
sum_multiples_of_3_or_5(10);
sum_multiples_of_3_or_5(20);
sum_multiples_of_3_or_5(1000);