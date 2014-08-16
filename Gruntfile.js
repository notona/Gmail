module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        nodewebkit: {
            src: ['package.json', 'index.html', 'lib/winstate.js'],
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);
};
