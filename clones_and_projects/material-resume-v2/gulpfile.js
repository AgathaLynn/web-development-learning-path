const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function() {
  return gulp.src('./sass/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});
