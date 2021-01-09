exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const binary = [...num.toString(2)];
    return bit > binary.length ? 0 : Number(binary[binary.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    return num.toString(2).padStart(8, '0');
  },

  multiply: function(a, b) {
    const totalDecimals = b.toString().includes('.') ? b.toString().split('.')[1].length : 0;
    return Number((a * b).toFixed(totalDecimals))
  }
};
