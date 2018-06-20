const path = require('path');

export default (config, env, helpers) => {
	// Find Babel config
	const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	const babelConfig = rule.options;

	// Add Emotion in babelrc
	babelConfig.plugins.push('emotion');

	// Set alias for $
	config.resolve.alias['%'] = path.resolve(__dirname, 'src');
};
