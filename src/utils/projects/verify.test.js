const Joi = require('joi');

const projects = require('./projects.json');

const languages = require('../languages/').default;

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
		.items(Joi.string())
		.required(),
	language: Joi.string()
		.valid(languages)
		.required()
});

const schema = Joi.array().items(Project);

Joi.validate(projects, schema)
	.then(console.log)
	.catch(console.warn);
