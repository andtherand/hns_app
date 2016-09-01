var dest = './public';
var src = './src';

module.exports = {
  browserSync: {
    notify: false,
    proxy: 'localhost:3000'
  },

  sass: {
    src: src + "/sass/style.sass",
    dest: dest + '/css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images', // Used by the image-url helper
      includePaths: [
        './node_modules/font-awesome/scss',
        './node_modules/bootstrap-sass/assets/stylesheets'
      ]
    }
  },

  fonts: {
    src: [
      './node_modules/font-awesome/fonts/*',
      './node_modules/bootstrap-sass/assets/fonts/bootstrap/*'
    ],
    dest: dest + '/fonts'
  },

  ngTemplate: {
    src: src + '/js/template',
    srcs: [src + '/js/template/**/*.html'],
    copyDest: dest + '/js',
    dest: src + '/js/template',
    outputName: 'index.js',
    uglify: {

    },
    html2js: {
      prefix: 'template/',
      declareModule: false,
      template:
        "angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
        "  $templateCache.put('<%= template.url %>',\n    '<%= template.escapedContent %>');\n" +
        "}]);\n"
    },

    injectModule: {
      template: "'use strict'; module.exports = angular.module('Hns.templates',[%templateModules%]);\n",
      search: '%templateModules%'
    },
    minifyHtml: {
      comments: true,
      conditionals: true,
      empty: true,
      quotes: true
    }
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/front.js',
      dest: dest + '/js',
      outputName: 'front.js'
    }, {
      entries: src + '/js/app_bootstrap',
      dest: dest + '/js',
      outputName: 'app_bootstrap.js'
    }]
  },

  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
