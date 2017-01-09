/*!
* Author: Ahmed Tokyo
* ahmed.tokyo1@gmail.com
* tokyo@dreidev.com
*/
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('serve', function() {
  connect.server({
    livereload: true,
    root: 'src',
    port: 9001,
    https: false
  });
});
