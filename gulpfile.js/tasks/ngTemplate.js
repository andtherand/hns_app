var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var ngHtml2Js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var inject = require('gulp-inject-string');
var config = require('../config').ngTemplate;

var modules = [];

gulp.task('ngTemplate:merge', function () {

    function _extractModuleName(file) {
        var filePath = file.path,
            windowsSlash = '\\',
            search = 'template',
            modName;

        if (windowsSlash.indexOf(filePath)) {
            filePath = filePath.replace(/\\/g, '/');
        }

        modName = filePath.substr(filePath.indexOf(search));
        modules.push(modName);

        return modName;
    }

    return gulp.src(config.srcs)
        .pipe(minifyHTML(config.minifyHtml))
        .pipe(ngHtml2Js({
            moduleName: _extractModuleName,
            template: config.html2js.template,
            prefix: config.html2js.prefix,
            declareModule: config.html2js.declareModule
        }))
        .pipe(concat(config.outputName))
        .pipe(uglify(config.uglify))
        .pipe(gulp.dest(config.dest));
});

gulp.task('ngTemplate:copy', function() {
   return gulp.src(config.copyTemplates)
       .pipe(gulp.dest(config.copyDest));

});

gulp.task('ngTemplate', ['ngTemplate:merge'], function() {
    function _replace() {
        return config.injectModule.template.replace(new RegExp(config.injectModule.search), "'" + modules.join("','") + "'");
    }

    return gulp.src(config.src + '/' + config.outputName)
        .pipe(inject.prepend(_replace()))
        .pipe(gulp.dest(config.dest));
});
