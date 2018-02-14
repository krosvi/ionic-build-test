/*global module, require*/

module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // get environment variable value
  function getEnvName() {
    var envName = 'dev';
    if (process.env.NODE_ENV) {
      envName = process.env.NODE_ENV.toLowerCase();
    }

    return envName;
  }

  function getAppVersion() {
    var appVersion = '';
    if (grunt.file.exists('version')) {
      appVersion = grunt.file.read('version');
    } else if (grunt.option('app-version')) {
      appVersion = grunt.option('app-version');
    } else {
      appVersion = configs.pkg.version;
    }

    return appVersion;
  }

  // configuration
  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: './config/tasks/*.json'
    }
  });
  configs.pkg = grunt.file.readJSON('package.json');
  configs.ENV = grunt.file.readJSON('./config/env/' + getEnvName() + '.json');
  configs.VERSION = getAppVersion();

  grunt.initConfig(configs);

  grunt.log.ok('Environment: ' + configs.ENV.environment);
  grunt.log.ok('Application Version: ' + configs.VERSION);

  // build task
  grunt.registerTask('phonegap-build', [
    'clean',
    'shell:ionic-build',
    'replace:config',
    'compress'
  ]);
};
