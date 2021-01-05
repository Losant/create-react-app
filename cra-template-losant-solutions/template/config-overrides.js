import getTarget from "./src/targets"

module.exports = function override(config, env) {

  // do not change config if running locally
  if (process.env.RUNNING_ON === 'local') {
    return config;
  }

  // determine output directory based on version building
  const targetName = process.env.REACT_APP_TARGET;
  const target = getTarget(targetName);
  const appId = target.appId;

  // remove chunking
  if (config.optimization) {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
  }

  // Output folder structure
  if (config.output) {
    config.output.filename = 'js/[name].[contenthash:8].js';
    if (config.output && config.output.path) {
      config.output.path = config.output.path.replace(
        /build$/,
        'build/files/' + targetName
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
