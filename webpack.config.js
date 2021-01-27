const path = require('path');

module.exports = {
  entry: './src/index.js',

  devServer: {
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
};
