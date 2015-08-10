var config = require('./')
var karmaWebpack = require('karma-webpack')
var webpackConfig = require('./webpack')('test')

var files = config.testDirectory + '/*'

var karmaConfig = {
  frameworks: ['jasmine'],
  files: [files],
  preprocessors: {},
  webpack: webpackConfig,
  singleRun: process.env.TRAVIS_CI === 'true',
  reporters: ['nyan'],
  browsers: ['Chrome']
}

karmaConfig.preprocessors[files] = ['webpack']

module.exports = karmaConfig
