const Joi = require('joi');

const projects = require('./projects.json');

const languages = require('../languages/list.json');

const languagesList = Object.keys(languages);

const Project = Joi.object().keys({
	name: Joi.string().required(),
	description: Joi.string().required(),
	sources: Joi.object()
		.keys({
			github: Joi.string(),
			npm: Joi.string(),
			pypi: Joi.string()
		})
		.min(1)
		.required(),
	keywords: Joi.array()
		.items(Joi.string().min(1))
		.required(),
	language: Joi.string()
		.valid(languagesList)
		.required()
});

const schema = Joi.array().items(Project);

Joi.validate(projects, schema)
	.then(console.log)
	.catch(error => {
		console.warn(error.details);
		process.exit(1);
	});
