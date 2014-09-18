/**
 * @fileoverview add module
 * @usage grunt add:modName
 */
module.exports = function(grunt) {

    'use strict';

    var mkfiles = require('mkfiles');

    function generateFiles(modName, desc) {
        var taskDir = './tasks/add/';

        mkfiles({
            path: grunt.config('srcDir') + '/',
            dirs: [modName],
            files: [{
                file: 'example.html',
                content: {
                    template: taskDir + 'example.html.handlebars',
                    data: {
                        modName: modName
                    }
                }
            }, {
                file: 'example.style',
                content: {
                    template: taskDir + 'example.style.handlebars',
                    data: {
                        modName: modName
                    }
                }
            }, {
                file: 'readme.template',
                content: {
                    template: taskDir + 'readme.handlebars',
                    data: {
                        modName: modName,
                        desc: desc
                    }
                }
            }, {
                file: 'mixin.less',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: '.'
                    }
                }
            }, {
                file: 'mixin.scss',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: '@mixin '
                    }
                }
            }, {
                file: 'mixin.styl',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: ''
                    }
                }
            }]
        });
    }

    grunt.registerTask('add', function(modName, desc) {
        // mixin module name must begin with 'x-'
        if (modName.substring(0, 2) != 'x-') {
            modName = 'x-' + modName;
        }

        generateFiles(modName, desc || '');
    });

};