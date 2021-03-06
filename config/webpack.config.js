var webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.plugins = [new TsConfigPathsPlugin()];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
