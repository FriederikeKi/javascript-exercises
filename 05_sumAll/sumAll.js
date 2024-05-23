/*PSEUDOCODE
- Input: 2 numbers, separated with comma
- Output: total (sum of all)
Algorithm
- check input: if not a number --> ERROR
- check input: if number < 0 --> ERROR
- sort the numbers by size (smaller first)
- create an array with values of every nr between and including the given 2 numbers
- reduce elements of array to a sum
*/ 

const sumAll = function(input1, input2) {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "ERROR";
    }
    if (input1 <0 || input2 < 0) {
        return "ERROR";
    }
    let allNrArray = [];
    const rangeArray = [input1, input2]
    const sortedRangeArray = rangeArray.sort((a,b) => a -b);
    for (let i = sortedRangeArray[0]; i <= sortedRangeArray[1]; i++) {
        allNrArray.push(i);
    }
    const total = allNrArray.reduce((acc, curr) => acc + curr);
    return total;
};

// Do not edit below this line
module.exports = sumAll;
