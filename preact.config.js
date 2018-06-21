const path = require('path');

// ExtractTextPlugin

const findPluginsByName = (config, name) => config.plugins.filter(plugin => plugin.constructor.name === name);

export default (config, env, helpers) => {
  // Find configs / plugins
  const babelConfig = helpers.getLoadersByName(config, 'babel-loader')[0].rule.options;
  const extractTextPlugin = findPluginsByName(config, 'ExtractTextPlugin')[0];

  // Add Emotion in babelrc
  babelConfig.plugins.push('emotion');

  // Say to CSS that url starts with /stuff/
  extractTextPlugin.filename = 'stuff/' + extractTextPlugin.filename;

  // Set alias for $
  config.resolve.alias['%'] = path.resolve(__dirname, 'src');
};
