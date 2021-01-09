exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  remove: function(arr, item) {
    return arr.filter((value) => value !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let total = 0
    arr.forEach((value) => {
      if (value === item) total++;
    });
    return total;
  },

  duplicates: function(arr) {
    return arr.filter((item, index) => arr.lastIndexOf(item) == index && arr.indexOf(item) != index);
  },

  square: function(arr) {
    return arr.map(item => Math.pow(Number(item), 2));
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((previous, current, index) => {
      if (current === target) previous.push(index);
      return previous;
    }, []);
  }
};
