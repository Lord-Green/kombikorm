'use strict';

const
  newer = require('gulp-newer'),
  gulp = require('gulp');

module.exports = function (options) {
  return function () {
    return gulp.src('frontend/js/**/*.*')
      .pipe(newer('public/js'))
      .pipe(gulp.dest('public/js'))
  };
};

