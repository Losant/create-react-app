/* eslint-disable no-undef */
module.exports = function override(config) {

  // do not change config if running locally
  if (process.env.REACT_APP_RUNNING_ON === 'local') {
    return config;
  }

  const targets = require('./src/targets.json');

  // determine output directory based on version building
  const targetName = process.env.REACT_APP_TARGET;
  const target = targets[targetName];
  const appId = target.appId;

  // remove chunking
  if (config.optimization) {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false
      }
    };
  }

  // Output folder structure
  if (config.output) {
    config.output.filename = 'js/[name].[hash:8].js';
    if (config.output && config.output.path) {
      config.output.path = config.output.path.replace(
        /build$/,
        `build/files/${targetName}`
      );
    }

    // URL to fetch files from while running
    if (config.output && config.output.publicPath) {
      config.output.publicPath = `https://files.onlosant.com/${appId}/${targetName}/`;
    }
  }


  if (config.plugins) {
    // find CSS plugin and remove hashing
    config.plugins.forEach((plugin) => {
      if (
        plugin.options &&
        plugin.options.filename &&
        plugin.options.filename.indexOf('static/') !== -1
      ) {
        plugin.options.filename = plugin.options.filename.replace(
          'static/',
          ''
        );
      }
    });
  }

  return config;
};
