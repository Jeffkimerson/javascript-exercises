const fibonacci = function(num) {
    if (typeof num == "string") {
        num = parseInt(num);
    }
    else if (num <= -1) {
        return 'OOPS';
    }

    if(num <= 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
