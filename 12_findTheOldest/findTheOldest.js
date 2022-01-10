const findTheOldest = function(arr) {
    let oldest = 0;
    let index;
    let year = new Date().getFullYear();
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
       let age;
        if (!arr[i].hasOwnProperty('yearOfDeath')) {
            age = year - arr[i].yearOfBirth;
        }
        else {
        age = arr[i].yearOfDeath - arr[i].yearOfBirth; 
        }
        if (age > oldest) {
            oldest = age;
            index = i;
        }
        
    }
    return arr[index];

};

// Do not edit below this line
module.exports = findTheOldest;
