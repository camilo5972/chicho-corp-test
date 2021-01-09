exports = typeof window === 'undefined' ? global : window;

class Module {
  name;
  greeting;

  constructor(name, greeting) {
    this.name = name;
    this.greeting = greeting;
  }

  sayIt = () => `${this.greeting}, ${this.name}`;
}

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return new Module(str2, str1);
  }
};
