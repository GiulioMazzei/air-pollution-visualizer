const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',

  devServer: {
    // these configs are needed in the development part
    // publicPath: '/dist/',
    // contentBase: path.join(__dirname, 'public'),
    // port: 9000,
  },

  plugins: [new Dotenv()],
};
