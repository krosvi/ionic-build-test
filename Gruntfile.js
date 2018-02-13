/*global module, require*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task
  grunt.registerTask('default', function() {
    console.log('test env: ' + process.env.NODE_ENV);
  });
};
