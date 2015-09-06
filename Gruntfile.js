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
						cwd: '<%= config.webroot %>/less/',      //Src matches are relative to this path.
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
                                'jquery',
                                'rs-config'
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
            less: {
                files: ['<%= config.webroot %>/less/**/*.less'],
                tasks: [
                	'less:development'
                ],
                options: {
                    nospawn: true
                }
            }
        },
        cacheBust: {
        	options: {
        		encoding: 'utf8',
        		algorithm: 'md5',
        		length: 16,
        		deleteOriginals: true,
        		jsonOutput: true,
        		ignorePatterns: ['test', 'require.js'],
        		baseDir: '<%= config.dist %>',
                cdnPath: 'http://yjb-static.youku.com/route/static/',
                filters: {
                    'script': [
                        function() {
                            return this.attribs['data-main'];
                        },
                        function() {
                            return this.attribs.src;
                        }
                    ]
                }
            },
        	assets: {
        		files: [
	        		{   
	        			expand: true,
	        			cwd: '<%= config.dist %>',
	        			src: ['css/**/*.css', 'page/**/*.html']
	        		}
                  ]
        	}
        },

        replace: {
            dist: {
                options: {
                    patterns: [
                    {
                        match: /([\("'])((\.+\/)+)(.+?[\("'])/ig,
                        replacement: function(){
                           return arguments[1] + '/static/' + arguments[4];
                        }
                    }
                    ]
                },
                files: [
                {
                    expand: true, 
                    cwd: '<%= config.dist %>',
                    src: ['page/**/*.html', 'css/**/*.css'], 
                    dest: '<%= config.dist %>'
                }
                ]
            }
        }

	});

    grunt.event.on('watch', function(action, filepath){
        // ignore include files, TODO: have naming convention
        // if an include file has been changed, all files will be re-compiled
        if(filepath.indexOf('.inc.') > -1)
            return true;

        // might not be the most efficient way to do this
        var srcDir = filepath.split('/');
        var filename = srcDir[srcDir.length - 1];
        delete srcDir[srcDir.length - 1];
        srcDir = srcDir.join('/');
        var destDir = srcDir.replace(/less/g, 'css');

        grunt.config('less.development.files', [{
            src: filename,
            dest: destDir,
            expand: true,
            cwd: srcDir,
            ext: '.css',
            extDot: 'last'
        }]);
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('dist', [
        'requirejs',
        'cacheBust',
        'replace'
    ]);

};