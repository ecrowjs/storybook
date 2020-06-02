const storybook = require('@storybook/react/standalone');
const scriptPath = require('path').basename(__dirname);

storybook({
  mode: 'dev',
  port: 2769,
  staticDir: [`${scriptPath}/static`],
  configDir: `${scriptPath}/config`,
});
