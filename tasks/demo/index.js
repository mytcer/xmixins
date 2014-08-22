/**
 * @fileoverview 启动一个本地服务器（用于测试demo），并在默认浏览器中打开demo页
 * @usage grunt demo
 */
module.exports = function(grunt) {

    'use strict';

    grunt.registerTask('demo', function() {
        grunt.task.run(['default', 'connect']);
    });

};