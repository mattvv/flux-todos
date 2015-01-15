var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var concat = require('gulp-concat');

gulp.task('compile', function() {
  var b = browserify();
  b.transform(reactify); //use reactify transform
  b.add('./main.js');
  return b.bundle()
    .pipe(source('./main.js'))
    .pipe(gulp.dest('./dist'));
})
