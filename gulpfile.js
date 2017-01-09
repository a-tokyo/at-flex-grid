/*!
* Author: Ahmed Tokyo
* ahmed.tokyo1@gmail.com
* tokyo@dreidev.com
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var runSequence = require('run-sequence');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('default', ['build']);

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

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('build-sass', function() {
  // Regular File
  gulp.src('src/scss/at-flex.scss')
  .pipe(sass())
  .pipe(autoprefixer({
          browsers: ['last 5 versions'],
          cascade: false
      }))
  .pipe(gulp.dest('dist/'));
  // Minified File
  gulp.src('src/scss/at-flex.scss')
  .pipe(sass())
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(autoprefixer({
          browsers: ['last 5 versions'],
          cascade: false
      }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['build-sass']
  )
});
