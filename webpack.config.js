const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'jellybean-robot-adventure.js',
    path: path.resolve(__dirname, 'dist'),
  },
};