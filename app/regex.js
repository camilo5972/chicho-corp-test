exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const regex = new RegExp(/\d/);
    return regex.test(str);
  },
  
  containsRepeatingLetter: function(str) {
    const regex = new RegExp(/([a-z])\1/i);
    return regex.test(str);
  },
  
  endsWithVowel: function(str) {
    const regex = new RegExp(/(a|e|i|o|u)$/i);
    return regex.test(str);
  },
  
  captureThreeNumbers: function(str) {
    const regex = new RegExp(/\d{3}/);
    if (!regex.test(str)) return false;
    return regex.exec(str).join('');
  },
  
  matchesPattern: function(str) {
    const regex = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
    return regex.test(str);
  },
  
  isUSD: function(str) {
    const regex = new RegExp(/^\$(\d+|\d{1,3}(,\d{3}){2})(\.\d+)?$/);
    return regex.test(str);
  }
};
