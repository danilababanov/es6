'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  fs: require('fs'),
  bs: require('browser-sync').create(),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'sass', 'scripts', 'scripts:lib', 'img:dev'),
  $.gulp.parallel('watch', 'serve')
  ));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('pug', 'sass', 'scripts', 'scripts:lib', 'img:build'),
  $.gulp.parallel('watch', 'serve')
  ));
