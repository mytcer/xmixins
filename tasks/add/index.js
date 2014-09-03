/**
 * @fileoverview 添加模块
 * @usage grunt add:modName
 */
module.exports = function(grunt) {

    'use strict';

    var mkfiles = require('mkfiles');

    function generateFiles(modName, link) {
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
                file: 'examstyle.template',
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
                        modName: modName
                    }
                }
            }, {
                file: 'mixin.less',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: '.',
                        link: link
                    }
                }
            }, {
                file: 'mixin.scss',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: '@mixin ',
                        link: link
                    }
                }
            }, {
                file: 'mixin.styl',
                content: {
                    template: taskDir + 'mixin.handlebars',
                    data: {
                        modName: modName,
                        define: '',
                        link: link
                    }
                }
            }]
        });
    }

    grunt.registerTask('add', function(modName, link) {
        // 所有mixin模块名必须以x-开头
        if (modName.substring(0, 2) != 'x-') {
            modName = 'x-' + modName;
        }

        generateFiles(modName, link || '');
    });

};