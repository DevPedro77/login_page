const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarSass() {
    return gulp.src('src/styles/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles/main.css'));
  }

exports.default = compilarSass;
