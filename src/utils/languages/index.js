const list = require('./list.json');

const languages = Object.keys(list);

const getLanguage = languageName => {
	if (languages.includes(languageName)) {
		return list[languageName];
	}
	return null;
};

const getColor = languageName => {
	const language = getLanguage(languageName);
	return language ? language.color : null;
};

// Use transpiled ES module becase it loaded by ESM and CommonJS

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports.default = languages;
exports.getLanguage = getLanguage;
exports.getColor = getColor;
