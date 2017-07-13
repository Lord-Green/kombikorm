'use strict';

const
  newer = require('gulp-newer'), 
  imagemin = require('gulp-imagemin'),
  gulp = require('gulp');

module.exports = function (options) {
  return function () {
    return gulp.src('frontend/img/**/*.{png,jpg,svg}')
      .pipe(newer('public/img/'))
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('public/img/'))
  };
};