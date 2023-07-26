const path = require('path');

module.exports = {
  // Other configurations...
  devtool: 'none',
  // Add other webpack configurations as needed
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Add loaders, plugins, and other configurations...
};
