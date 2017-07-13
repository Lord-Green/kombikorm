/* Gulp Project. Copyright © 2017. 
 * Maxim Buslaev, maximys@protonmail.com
 * ISC Licensed */
'use strict';

const
  gulp = require('gulp');


function lazyRequireTask(taskName, path, options) {
  gulp.task(taskName, function (callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
}

lazyRequireTask('img', './tasks/img.js');
lazyRequireTask('css', './tasks/css.js');
lazyRequireTask('scripts', './tasks/scripts.js');
lazyRequireTask('html', './tasks/html.js');
lazyRequireTask('build', './tasks/build.js');

gulp.task('watch', function () {
  gulp.watch('frontend/img/**/*.*', gulp.series('img'));
  gulp.watch('frontend/css/**/*.scss', gulp.series('css'));
  gulp.watch('frontend/js/**/*.js', gulp.series('scripts'));
  gulp.watch('frontend/html/**/*.pug', gulp.series('html'));
});

gulp.task('default', gulp.series(
  gulp.parallel(gulp.series('img', 'css'), 'scripts', 'html'), 'watch')
);
