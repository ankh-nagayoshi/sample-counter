//**************************************************
// modules load
//**************************************************

var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

//**************************************************
// path
//**************************************************

var jsSrcPath = './src';
var jsDestPath = './dist';
var entryPointFile = 'index.js'

//**************************************************
// tasks
//**************************************************

// browserify
gulp.task('browserify', function() {
  return jscompile(false);
});

// watchify
gulp.task('watchify', function() {
  return jscompile(true);
});

function jscompile(isWatch) {
  var bundler;
  var entryPointFilePath = jsSrcPath + '/' + entryPointFile;
  
  if (isWatch) {
    bundler = watchify(browserify(entryPointFilePath));
  } else {
    bundler = browserify(entryPointFilePath);
  }
  
  function rebundle() {
    return bundler
      .transform(babelify, {"presets": ["es2015", "react"]})
      .bundle()
      .on("error", function(err) { console.log("Error: " + err.message); })
      .pipe(source(entryPointFile))
      .pipe(buffer())
      // .pipe(uglify())
      .pipe(gulp.dest(jsDestPath));
  }
  
  bundler.on('update', function() {
    rebundle();
  });
  
  bundler.on('log', function(message) {
    console.log(message);
  });
  
  return rebundle();
}
