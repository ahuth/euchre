var config = require('./')
var karmaWebpack = require('karma-webpack')
var webpackConfig = require('./webpack')('test')

var files = './spec/*'

var karmaConfig = {
  frameworks: ['jasmine'],
  files: [  files ],
  preprocessors: {},
  webpack: webpackConfig,
  singleRun: process.env.TRAVIS_CI === 'true',
  reporters: ['nyan'],
  browsers: [(process.env.TRAVIS_CI === 'true'? 'Firefox' : 'Chrome')]
}

karmaConfig.preprocessors[files] = ['webpack']

module.exports = karmaConfig
