exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let list = [];
    const recursive = (input, dirName) => {
      for (let file of input.files) {
        if (typeof file === 'string') {
          if (dirName) {
            if (dirName === input.dir) list.push(file);
          } else {
            list.push(file);
          }
        }
        else {
          const subDirName = dirName === input.dir ? file.dir : dirName;
          list.concat(recursive(file, subDirName));
        }
      }
      return list;
    }
    return recursive(data, dirName);
  },

  permute: function(arr) {
    let result = [];
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const remainingPermuted = this.permute(remaining);
      for (let j = 0; j < remainingPermuted.length; j++) {
        const permutedArray = [current].concat(remainingPermuted[j]);
        result.push(permutedArray);
      }
    }
    return result;
  },

  fibonacci: function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return n > 1 ? this.fibonacci(n - 1) + this.fibonacci(n - 2) : 0;
  },

  validParentheses: function(n) {
    const result = [];
    const breathFirstSearch = (str, left, right) => {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + '(', left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ')', left, right + 1);
      }
    };

    breathFirstSearch('', 0, 0);
    return result;
  }
};
