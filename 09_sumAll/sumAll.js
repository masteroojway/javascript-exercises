const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
    let temp = Math.abs(num1-num2)
    return (temp+1)*(num1+num2)/2;
};

// Do not edit below this line
module.exports = sumAll;
