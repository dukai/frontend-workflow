module.exports = function(grunt) {

	var config = {
        webroot: 'src',
        dist: 'dist',
        testroot: 'test',
        tstamp: '<%= grunt.template.today("ddmmyyyyhhMMss") %>'
    };

	grunt.initConfig({
		config: config,
		less: {
			development: {
				options: {
					paths: ["less"]
				},
				files: [
					{
						expand: true,     //Enable dynamic expansion.
						cwd: 'src/less/',      //Src matches are relative to this path.
						src: ['**/*.less'], //Actual pattern(s) to match.
						dest: 'src/css/',   //Destination path prefix.
						ext: '.css',   //Dest filepaths will have this extension.
						extDot: 'first'   //Extensions in filenames begin after the first dot
					},
				],
			}
		},

		requirejs: {
			compile: {
				options: {
					appDir: '<%= config.webroot %>',
					baseUrl: "js",
					dir: '<%= config.dist %>',
					mainConfigFile: '<%= config.webroot %>/js/rs-config.js',
					optimize: 'none',
					skipDirOptimize: true,
					modules: [
                        {
                            name: 'rs-config',
                            include: [
                                'jquery'
                            ]
                        },

                        {
                            name: 'app/page-main',
                            exclude: ['rs-config']
                        },
                        {
                            name: 'app/page-sub',
                            exclude: ['rs-config']
                        }
                    ]
				}
			}
		},

		watch: {
            options: {
                // Reload assets live in the browser.
                // Default livereload listening port is 35729.
                livereload: 1337
            },
            css: {
                files: ['<%= config.webroot %>/less/**/*.less'],
                tasks: [
                	'less'
                ]
            }
        }

	});
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
};