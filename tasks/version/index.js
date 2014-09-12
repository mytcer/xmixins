/**
 * @fileoverview set version for package.json, bower.json, and component.json
 * @usage grunt version:x.x.x
 */
module.exports = function(grunt) {

    'use strict';

    var fse = require('fs-extra');

    grunt.registerTask('version', function(version) {
        var pkg = fse.readJsonSync('package.json');
        var bower = fse.readJsonSync('bower.json');
        var component = fse.readJsonSync('component.json');

        pkg.version = version;
        bower.version = version;
        component.version = version;

        fse.writeJsonSync('package.json', pkg);
        fse.writeJsonSync('bower.json', bower);
        fse.writeJsonSync('component.json', component);

        console.log('Version is set to ' + version + ' !');
    });

};