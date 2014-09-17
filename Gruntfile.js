module.exports = function(grunt) {

    'use strict';

    var address = require('ip').address();

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
            // generate doc
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
            // generate the entrance files
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
            // generate demo html
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
            // generate demo style
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
        less: {
            all: {
                src: ['<%= testDir %>/less/demo.less'],
                dest: '<%= testDir %>/less/demo.css'
            }
        },
        sass: {
            all: {
                src: ['<%= testDir %>/sass/demo.scss'],
                dest: '<%= testDir %>/sass/demo.css'
            }
        },
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
        clean: {
            tmpFiles: [
                '<%= testDir %>/less/demo.less',
                '<%= testDir %>/sass/demo.scss',
                '<%= testDir %>/styl/demo.styl',
                '<%= exampleFilePath %>.*.tmp',
                '<%= mixinDocFilePath %>.*.tmp'
            ]
        },
        concurrent: {
            dev: {
                tasks: ['connect', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        connect: {
            demo: {
                options: {
                    hostname: address,
                    directory: 'test',
                    port: '8001',
                    debug: true,
                    open: 'http://' + address + ':8001/test/less/demo.html',
                    keepalive: true
                }
            }
        },
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
                reporter: require('jshint-stylish') // beauty jshint output
            },
            all: ['tasks/**/*.js']
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // generate readme and example for mixin module
    grunt.task.loadTasks('./tasks/generate');

    /**
     * add module
     * @usage grunt add:modName
     */
    grunt.task.loadTasks('./tasks/add');

    /**
     * set package version
     * @usage grunt version:x.x.x
     */
    grunt.task.loadTasks('./tasks/version');

    grunt.registerTask('default', [
        'generate',
        'concat',
        'less',
        'sass',
        'stylus',
        'clean'
    ]);

    grunt.registerTask('demo', ['concurrent:dev']);

};