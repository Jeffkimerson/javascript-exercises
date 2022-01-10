const palindromes = function (str) {
    str = str.toLowerCase()
    let abc = /[a-z]/;
    let phrase = '';
    let revPhrase = '';

    for (let i = 0; i < str.length; i++) {
        if(abc.test(str[i])) {
            phrase += str[i];
            revPhrase = str[i] + revPhrase;
        }
    }
    if (phrase == revPhrase) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
