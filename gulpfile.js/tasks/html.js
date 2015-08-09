var browserSync  = require('browser-sync');
var config       = require('../config/html');
var gulp         = require('gulp');
var render       = require('gulp-nunjucks-render');
var handleErrors = require('../lib/handleErrors');

gulp.task('html', function() {
  render.nunjucks.configure(config.nunjucks, {watch: false });
  return gulp.src(config.src)
    .pipe(render())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
