// Modules 호출
var gulp = require('gulp');
var sass = require('gulp-sass'); //sourcemaps = require('gulp-sourcemaps')
var minifyCss = require('gulp-minify-css');

// Gulp.task() 를 사용해 기본(Default) 테스크를 정의
/*
gulp.task('default', function () {
  console.log('gulp default 일이 수행되었습니다!!!');
});
*/

gulp.task('sass:compile', function () {
  return gulp // SCSS 파일을 읽어온다.
  .src('/scss/**/*.scss') // 소스맵 초기화(소스맵을 생성)
  //.pipe(concat('/css/agency.css'))
  .pipe(sass())
  //.pipe(minifyCss())
  .pipe(gulp.dest('css'))
});


//gulp.task('default', ['js:combine','scss:compile','watch']);
gulp.task('default',
  ['sass:compile']
);
