/* vim: set softtabstop=2 shiftwidth=2 expandtab : */
var webpack = require('webpack');
var path = require('path')
var _ = require('lodash')

var baseConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
    ],
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}; /* baseConfig */

/**
 * Web config uses a global Vue and Lodash object.
 * */
var exampleCircle = _.clone(baseConfig);
exampleCircle.entry = './examples/circle/index.js'
exampleCircle.output = {
    path: './examples/circle',
    filename: "bundle.js"
};

module.exports = [
    exampleCircle,
];

module.exports.devtool = '#source-map'
