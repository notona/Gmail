module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        nodewebkit: {
            src: ['package.json', 'src/**'],
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);
};
