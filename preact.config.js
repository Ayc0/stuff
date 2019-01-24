const path = require('path');

// const findPluginsByName = (config, name) => config.plugins.filter(plugin => plugin.constructor.name === name);

export default (config, env, helpers) => {
  // Find configs / plugins
  const babelConfig = helpers.getLoadersByName(config, 'babel-loader')[0].rule.options;

  // Add Emotion in babelrc
  babelConfig.plugins.push('emotion');

  // Set alias for $
  config.resolve.alias['%'] = path.resolve(__dirname, 'src');
};
