var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence('ngTemplate', ['fonts'], 'sass', 'watch');
});

gulp.task('stage', function(){
    runSequence('ngTemplate', ['fonts'], 'sass', 'browserify');
});
