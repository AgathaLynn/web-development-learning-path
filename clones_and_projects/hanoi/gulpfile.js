const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('default', ['sass', 'babel', 'copy'], function() {
  console.log('tasks completed');
});

gulp.task('sass', function() {
  return gulp.src('src/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist'));
});

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});
