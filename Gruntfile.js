module.exports = function(grunt) {

    grunt.initConfig({

        /*// JS TASKS ================================================================
        jshint: {
          all: ['public/angular-app/modules/**/
        *.js ','
        public / angular - app / services /**/ * .js ','
        public / angular - app
        /*.js']
            },

            uglify: {
              build: {
                files: {
                  'public/dist/js/app.min.js': ['public/src/js/**/
        *
        .js ', '
        public / src / js
        /*.js']
                }
              }
            },*/

        // CSS TASKS ===============================================================
        less: {
            build: {
                files: {
                    'public/dist/css/style.css': 'public/assets/style.less'
                }
            }
        },

        cssmin: {
            build: {
                files: {
                    'public/dist/css/style.min.css': 'public/dist/css/style.css'
                }
            }
        },

        // COOL TASKS ==============================================================
        watch: {
            css: {
                files: ['public/src/css/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['public/angular-app/modules/**/*.js'],
                tasks: ['jshint', 'uglify']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon'] //, 'watch']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    //grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'concurrent']);
    //grunt.registerTask('build', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent']);

};
