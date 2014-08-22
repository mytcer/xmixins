/**
 * @fileoverview 基于mixin模块中的readme.md.template和example.style.template生成less, sass及stylus版本
 */
module.exports = function(grunt) {

    'use strict';

    var fs = require('fs');
    var path = require('path');
    var globule = require('globule');
    var mkfiles = require('mkfiles');

    var keywordMap = {
        less: {
            include: '.',
            variable: '@'
        },
        scss: {
            include: '@include ',
            variable: '$'
        },
        styl: {
            include: '',
            variable: '$'
        }
    };

    function convert(filepath, type) {
        var curKeywordMap = keywordMap[type];
        var content = fs.readFileSync(filepath, {
            encoding: 'utf8'
        });

        return content.replace(/<%=include%>/g, curKeywordMap.include)
            .replace(/<%=variable%>/g, curKeywordMap.variable);
    }

    function generateFiles(originFilePath) {
        var outputFileName = originFilePath.indexOf('readme') != -1 ? 'readme' : 'example';

        mkfiles({
            path: path.dirname(originFilePath),
            dirs: [''],
            files: [{
                file: outputFileName + '.less.tmp',
                content: convert(originFilePath, 'less')
   }, {
                file: outputFileName + '.scss.tmp',
                content: convert(originFilePath, 'scss')
   }, {
                file: outputFileName + '.styl.tmp',
                content: convert(originFilePath, 'styl')
   }]
        });
    }

    grunt.registerTask('generate', function() {
        globule.find({
            src: ['**/readme.template', '**/examstyle.template'],
            srcBase: grunt.config('srcDir') + '/',
            prefixBase: true
        }).forEach(generateFiles);
    });

};