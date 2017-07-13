'use strict';

const
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  syntax_scss = require('postcss-scss'),
  precss = require("precss"),
  postcss_css_reset = require('postcss-css-reset'),
  autoprefixer = require('autoprefixer'),
  assets = require('postcss-assets'),
  mqpacker = require('css-mqpacker'),
  fonts = require('postcss-font-magician'),
  sprites = require('postcss-sprites'),
  gulp = require('gulp');


const base_plugins = [
  precss,
  assets({ loadPaths: ['img/'] }),
  sprites({ spritePath: './public/img' }),
  fonts({ formats: 'woff2 woff', protocol: 'https:', display: 'swap' }),
  postcss_css_reset,
  autoprefixer({ browsers: ['last 3 version'] }),
  mqpacker({ sort: true })
];


module.exports = function (options) {
  return function () {
    return gulp.src('frontend/css/style.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(postcss(base_plugins, { parser: syntax_scss }))
      .pipe(rename({ extname: '.css' }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/styles'))
  };
};