/* PSEUDOCODE
split string into an array of every character as one array element
reverse the order of the array
join the elements of the array to one string
*/

const reverseString = function(string) {
  const arrayOfStringElements = string.split("");
  const arrayReversed = arrayOfStringElements.reverse();
  const stringReversed = arrayReversed.join("");
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
