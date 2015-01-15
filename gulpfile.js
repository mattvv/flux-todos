var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var concat = require('gulp-concat');

gulp.task('default', function() {
  var b = browserify();
  b.transform(reactify); //use reactify transform
  b.add('./app/main.js');
  return b.bundle()
    .pipe(source('./app/main.js'))
    .pipe(gulp.dest('./dist'));
})
