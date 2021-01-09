exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    fn();
    return `${arr[0]}, ${arr[1]}${arr[2]}`;
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`;
  },

  makeClosures: function(arr, fn) {
    return arr.map(item => () => fn(item));
  },

  partial: function(fn, str1, str2) {
    return (punctuation) => fn(str1, str2, punctuation);
  },

  useArguments: function() {
    return [...arguments].reduce((previous, current) =>  current + previous, 0);
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    fn(...args);
  },

  partialUsingArguments: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var allArguments = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, allArguments);
    }
  },

  curryIt: function(fn) {
    return (a) => (b) => (c) => fn(a, b, c);
  }
};
