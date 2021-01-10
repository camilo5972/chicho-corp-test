exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const regex = new RegExp(`(.)(?=\\1{${amount},})`, 'g');
    return str.replace(regex, '');
  },

  wordWrap: function(str, cols) {
    const regex = new RegExp(/(^|[\s])[^\s]{2,}([\s]|$)/, 'g');
    const replacer = (value) => value.replaceAll(' ', '\n');
    return str.replace(regex, replacer);
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
