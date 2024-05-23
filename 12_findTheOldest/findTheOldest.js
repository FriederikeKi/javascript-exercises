/* PSEUDOCODE
Input: Array of ojects
Output: Object with the oldest person
Algorithm:
Calculate ageNow as yearOfBirt until now for every array element
return array element (object) with highest ageNow
*/

const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const ages = array.map(person => {
        const yearOfDeath = person.yearOfDeath || currentYear;
        return yearOfDeath - person.yearOfBirth;
    });
   
    const maxAge = Math.max(...ages); 
    const OldestPersonIndex = ages.indexOf(maxAge);
    const result = array[OldestPersonIndex];
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
