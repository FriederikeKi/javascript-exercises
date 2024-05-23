/* PSEUDOCODE
Input: array, valuesToRemove (one or several values)
Output: array without valuesToRemove 
Requirements:
- one valueToRemove should be removed at any place (even more then once)
- values of the array can be numbers or strings
- only the same type of a value should be removed (no type conversion)

Algorithm:
- Check each element of the array if it includes one of the valuesToRemove (forEach, for-loop)
- fill the value with ""
- filter the array --> no elements like ""

Better:
- filter the array: Keep only values that the "values" input-array does not include
*/

const removeFromArray = function(array, ...values) {
    /* my solution - works but unnecessarily complex
    let arrayNew = array.slice();
    array.forEach((element, index) => {
        for (let i = 0; i < values.length; i++) {
            if  (element === values[i]) {
                arrayNew.fill("", index, index + 1);
            } 
        }
      }
    )

    const arrayFiltered = arrayNew.filter((el) => el !== "");
    return arrayFiltered;
    };
    */
    return array.filter(val => !values.includes(val));
}

// Do not edit below this line
module.exports = removeFromArray;
