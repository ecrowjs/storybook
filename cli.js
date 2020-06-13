#!/usr/bin/env node

const storybook = require('@storybook/react/standalone');

storybook({
  mode: 'dev',
  port: 2769,
  staticDir: [`${__dirname}/static`],
  configDir: `${__dirname}/config`,
});
