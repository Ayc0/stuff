const list = require('./list.json');

const languages = Object.keys(list);

export default languages;

export const getLanguage = languageName => {
  if (languages.includes(languageName)) {
    return list[languageName];
  }
  return null;
};

export const getColor = languageName => {
  const language = getLanguage(languageName);
  return language ? language.color : null;
};
