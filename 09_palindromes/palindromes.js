const palindromes = function (input) {
    /* elegantere Lösung, funktioniert auch - ähnlich zur vorgeschlagenen Lsg
    const validCharacters = "abcdefghijklmnopqrstuvzxyz0123456789";
    const forward = input.toLowerCase().split("")
                    .filter(el => validCharacters.includes(el))
                    .join("");*/
                    

    const forward = input.toLowerCase().split("")
                    .filter(el => el !== "!")
                    .filter(el => el !== ".")
                    .filter(el => el !== " ")
                    .filter(el => el !== ",")
                    .join("");
                    
    const backward = forward.split("").reverse().join("");
    if (forward === backward) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
