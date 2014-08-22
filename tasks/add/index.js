/**
 * @fileoverview 添加模块
 * @usage grunt add:modName
 */
module.exports = function(grunt) {

    'use strict';

    var fs = require('fs');
    var mkfiles = require('mkfiles');
    var Handlebars = require('handlebars');

    var exampleHtmlTemplate = Handlebars.compile(getTemplateContent('example.html.handlebars'));
    var exampleStyleTemplate = Handlebars.compile(getTemplateContent('example.style.handlebars'));
    var mixinTemplate = Handlebars.compile(getTemplateContent('mixin.handlebars'));
    var readmeTemplate = Handlebars.compile(getTemplateContent('readme.handlebars'));


    function getTemplateContent(templateFileName) {
        return fs.readFileSync('./tasks/add/' + templateFileName, {
            encoding: 'utf8'
        });
    }

    function generateFiles(modName, link) {
        mkfiles({
            path: grunt.config('srcDir') + '/',
            dirs: [modName],
            files: [{
                file: 'example.html',
                content: exampleHtmlTemplate({
                    modName: modName
                })
            }, {
                file: 'examstyle.template',
                content: exampleStyleTemplate({
                    modName: modName
                })
            }, {
                file: 'readme.template',
                content: readmeTemplate({
                    modName: modName
                })
            }, {
                file: 'mixin.less',
                content: mixinTemplate({
                    modName: modName,
                    define: '.',
                    link: link
                })
            }, {
                file: 'mixin.scss',
                content: mixinTemplate({
                    modName: modName,
                    define: '@mixin ',
                    link: link
                })
            }, {
                file: 'mixin.styl',
                content: mixinTemplate({
                    modName: modName,
                    define: '',
                    link: link
                })
            }]
        });
    }

    grunt.registerTask('add', function(modName, link) {
        // 所以mixin模块名必须以x-开头
        if (modName.substring(0, 2) != 'x-') {
            modName = 'x-' + modName;
        }

        generateFiles(modName, link || '');
    });

};