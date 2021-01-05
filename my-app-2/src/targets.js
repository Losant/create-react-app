const config = {
  defaultTarget: {
    name: 'default',
    url: 'https://google.com',
    appId: 'fdaslfjdsalkfjasdlkfjdskl;'
  },
  targets: [
    {
      name: 'development'
    },
    {
      name: 'staging'
    },
    {
      name: 'production'
    }
  ]
};

// url is the HTTP endpoint for API calls, i.e. https://mynewapplication.onlosant.com
// appId is the Losant application ID, i.e. "093919abbc039319a0a"
// You may provide a defaultTarget only, or optionally add specific targets with override url and AppId

// Note: The target "name" may also determine output directory for build files

export const getTarget = (name, fallbackToDefault = true) => {
  const candidate = config.targets.find( (target) => target.name === name );
  if (candidate) {
    return {
      ...config.defaultTarget,
      ...candidate
    };
  }
  if (fallbackToDefault) {
    return config.defaultTarget;
  }
  return null;
};

export default getTarget;
