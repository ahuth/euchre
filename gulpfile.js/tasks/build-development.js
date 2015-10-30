var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['images', 'svg-sprite'], ['sass', 'webpack:development', 'html'], cb)
});
