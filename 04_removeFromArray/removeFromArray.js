const removeFromArray = function(arr, ...remove) {
    for(let i = 0; i < remove.length; i++) {
        if(arr.indexOf(remove[i]) != -1) {
            arr.splice(arr.indexOf(remove[i]), 1);
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
