const ftoc = function(fah) {
  let conv =  (fah - 32) * 5 / 9;
  if (conv % 1) {
    return parseFloat(conv.toFixed(1));
  }
  return conv;
};

const ctof = function(cel) {
  let conv = cel * 9 / 5 + 32;
  if (conv % 1) {
    return parseFloat(conv.toFixed(1));
  }
  return conv;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
