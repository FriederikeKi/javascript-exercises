/* PSEUDOCODE
empty array
FOR [num times]
    push string into array 
FOR END
join all elements of the array and return

if num negative --> return "ERROR"
if string = "" --> return ""
*/


const repeatString = function(string, num) {
    const array = [];
    for (let i = 0; i < num; i++) {
        array.push(string);
    }
    let result = array.join('');

    if (num < 0) {
        result = 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
