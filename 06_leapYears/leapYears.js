/*PSEUDOCODE
input: year (number)
output: true/false
requirements:
- year is divisible by 4 OR divisible by 400
- NOT: year is divisible by 100 
*/

const leapYears = function(year) {
if (year % 400 === 0) {
    return true;
}
else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
