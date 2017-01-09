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

gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    livereload: true,
    root: 'src',
    port: 9001,
    https: false
  });
});

gulp.task('watch', function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('start', ['sass', 'watch', 'server']);
