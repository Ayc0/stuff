const Joi = require('joi');

const projects = require('./projects.json');

const languages = require('../languages/list.json');

const languagesList = Object.keys(languages);

const object = keys => Joi.object().keys(keys);
const array = items => Joi.array().items(items);
const string = () => Joi.string();
const url = () => string().uri();

const Project = object({
	name: string().required(),
	description: string().required(),
	sources: object({
		website: url(),
		github: url(),
		npm: url(),
		pypi: url()
	})
		.min(1)
		.required(),
	keywords: array(string()).required(),
	language: string()
		.valid(languagesList)
		.required()
});

const schema = array(Project);

Joi.validate(projects, schema)
	.then(console.log)
	.catch(error => {
		console.warn(error.details);
		process.exit(1);
	});
