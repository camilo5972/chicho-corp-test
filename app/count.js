exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let cont = start;
    console.log(start);
    cont++;
    const interval = setInterval(() => {
      if (cont === end) clearInterval(interval);
      console.log(cont);
      cont++;
    }, 100);
    const clear = () => {
      clearInterval(interval);
    }
    return { cancel: clear}
  }
};
