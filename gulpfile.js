var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var plumber       = require('gulp-plumber');
var notify        = require("gulp-notify");

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init(null, {
      proxy: "sass"
    });

    gulp.watch("app/css/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(err) {
  var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit('end');
};
    return gulp.src("app/css/*.scss")
      .pipe(plumber({errorHandler: onError}))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
          browsers: ['last 15 versions'],
          cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
});

// Default: turn the server on and refresh/inject on change!
gulp.task('default', ['serve']);
