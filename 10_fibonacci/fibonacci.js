/*PSEUDOCODE
Input: number
Output: number (nth member of Fibonacci sequence)
Algorithm:
- check if negative number --> OOPS
- convert string numbers to numbers
- create Fibonacci sequence
- return value of input = index
*/

const fibonacci = function(number) {
    if (typeof number === "string") {
        number = +number;
    }
    if (number === 0) return 0;
    
    if (number < 0) return "OOPS";
    
    fibonacciSequence = [1, 1]
    for (let i = 2; i < number; i++) {
        fibonacciSequence.push(fibonacciSequence[i-2] 
                               + fibonacciSequence[i-1]);
    }
    fibonacciNr = fibonacciSequence[number - 1]
    return fibonacciNr;
};

// Do not edit below this line
module.exports = fibonacci;
