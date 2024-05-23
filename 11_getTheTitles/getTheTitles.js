const getTheTitles = function(input) {
    let titles = [];
    for (let i = 0; i < input.length; i++)
    titles.push(input[i].title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
