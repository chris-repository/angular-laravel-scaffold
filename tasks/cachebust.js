var gulp = require('gulp');
var cachebust = require('gulp-cache-bust');

gulp.task('cachebust', ['usemin'], function () {
  gulp.src('./public/index.html')
    .pipe(cachebust())
    .pipe(gulp.dest('public'));
});