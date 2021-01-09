exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async (value) => value,

  manipulateRemoteData: async (url) => {
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson.people.sort((a, b) => a.name.localeCompare(b.name)).map(item => item.name);
  }
};
