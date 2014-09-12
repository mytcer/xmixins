/**
 * @fileoverview start a local server, and open demo page in the browser
 * @usage grunt demo
 */
module.exports = function(grunt) {

    'use strict';

    grunt.registerTask('demo', function() {
        grunt.task.run(['default', 'connect']);
    });

};