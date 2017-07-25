'use strict';

const
  // concat = require('gulp-concat'), rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  optimization_plugins = [cssnano],
  del = require('del'),
  gulp = require('gulp');

gulp.task('js-optim', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('сss-optim', function () {
  return gulp.src('public/**/*.css')
    .pipe(postcss(optimization_plugins))
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
  return del('public/img/sprite');
});

module.exports = function (options) {
  return gulp.parallel('js-optim', 'сss-optim', 'clean');
};



