const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compilarSass() {
    return gulp.src('src/styles/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles/main.css'));
  }

  function minificarJS (){
    return gulp.src('src/scripts/main.js')
      .pipe(uglify())//aqui acontece a minificação
      .pipe(gulp.dest('dist/scripts'));
  }

  const build = gulp.series(compilarSass, minificarJS)

exports.default = build
