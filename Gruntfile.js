module.exports = function(grunt) {

    'use strict';

    var ip = require('ip').address();

    grunt.initConfig({
        srcDir: 'src',
        docDir: 'doc',
        testDir: 'test',
        fragmentDir: 'fragment',

        outputFileName: 'index',
        outputLessFile: '<%= outputFileName %>.less',
        outputSassFile: '<%= outputFileName %>.scss',
        outputStylFile: '<%= outputFileName %>.styl',

        headFilePath: '<%= fragmentDir %>/head.html',
        footFilePath: '<%= fragmentDir %>/foot.html',
        exampleFilePath: '<%= srcDir %>/**/example',
        mixinDocFilePath: '<%= srcDir %>/**/readme',
        mixinSrcFilePath: '<%= srcDir %>/**/mixin',

        concat: {
            // 生成文档
            doc: {
                options: {
                    separator: '\r\n<br>\r\n'
                },
                files: {
                    '<%= docDir %>/less.md': ['<%= mixinDocFilePath %>.less.tmp'],
                    '<%= docDir %>/sass.md': ['<%= mixinDocFilePath %>.scss.tmp'],
                    '<%= docDir %>/styl.md': ['<%= mixinDocFilePath %>.styl.tmp']
                }
            },
            // 生成入口文件
            mixin: {
                options: {
                    stripBanners: true
                },
                files: {
                    '<%= outputLessFile %>': ['<%= mixinSrcFilePath %>.less'],
                    '<%= outputSassFile %>': ['<%= mixinSrcFilePath %>.scss'],
                    '<%= outputStylFile %>': ['<%= mixinSrcFilePath %>.styl']
                }
            },
            // 生成demo html
            demoHtml: {
                files: {
                    '<%= testDir %>/less/demo.html': [
                        '<%= headFilePath %>',
                        '<%= exampleFilePath %>.html',
                        '<%= footFilePath %>'
                    ],
                    '<%= testDir %>/sass/demo.html': [
                        '<%= headFilePath %>',
                        '<%= exampleFilePath %>.html',
                        '<%= footFilePath %>'
                    ],
                    '<%= testDir %>/styl/demo.html': [
                        '<%= headFilePath %>',
                        '<%= exampleFilePath %>.html',
                        '<%= footFilePath %>'
                    ]
                }
            },
            // 生成demo style
            demoStyle: {
                files: {
                    '<%= testDir %>/less/demo.less': [
                        '<%= outputLessFile %>',
                        '<%= exampleFilePath %>.less.tmp'
                    ],
                    '<%= testDir %>/sass/demo.scss': [
                        '<%= outputSassFile %>',
                        '<%= exampleFilePath %>.scss.tmp'
                    ],
                    '<%= testDir %>/styl/demo.styl': [
                        '<%= outputStylFile %>',
                        '<%= exampleFilePath %>.styl.tmp'
                    ]
                }
            }
        },

        // 编译less版的demo样式
        less: {
            all: {
                src: ['<%= testDir %>/less/demo.less'],
                dest: '<%= testDir %>/less/demo.css'
            }
        },

        // 编译sass版的demo样式
        sass: {
            all: {
                src: ['<%= testDir %>/sass/demo.scss'],
                dest: '<%= testDir %>/sass/demo.css'
            }
        },

        // 编译stylus版的demo样式
        stylus: {
            all: {
                options: {
                    compress: false
                },
                files: {
                    '<%= testDir %>/styl/demo.css': ['<%= testDir %>/styl/demo.styl']
                }
            }
        },

        // 清理临时目录及文件
        clean: {
            tmpFiles: [
                '<%= testDir %>/less/demo.less',
                '<%= testDir %>/sass/demo.scss',
                '<%= testDir %>/styl/demo.styl',
                '<%= exampleFilePath %>.*.tmp',
                '<%= mixinDocFilePath %>.*.tmp'
            ]
        },

        // 启动一个本地服务器
        connect: {
            demo: {
                options: {
                    hostname: ip,
                    directory: 'test',
                    port: '8001',
                    debug: true,
                    open: 'http://' + ip + ':8001/test/less/demo.html',
                    keepalive: true
                }
            }
        },

        // 监控文件改动
        watch: {
            all: {
                files: [
                    '<%= srcDir %>/**/*',
                    '!<%= srcDir %>/**/*.tmp',
                    '<%= fragmentDir %>/*.html',
                    'tasks/*.js'
                ],
                tasks: ['default']
            }
        },

        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish') // 美化jshint的输出结果
            },
            all: ['tasks/**/*.js']
        }
    });

    // 载入任务模块
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // 基于各模块目录的readme.template和examstyle.template来生成其less,sass及stylus版本
    grunt.task.loadTasks('./tasks/generate');

    /**
     * 添加模块
     * @usage grunt add:modName
     */
    grunt.task.loadTasks('./tasks/add');

    /**
     * 启动demo服务器，并在默认浏览器中打开demo页
     * @usage grunt demo
     */
    grunt.task.loadTasks('./tasks/demo');

    // 注册默认任务
    grunt.registerTask('default', [
        'generate',
        'concat',
        'less',
        'sass',
        'stylus',
        'clean'
    ]);

};