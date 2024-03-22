var gulp = require('gulp');
//var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var open = require('gulp-open');
var include = require("gulp-include");
//var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var buildSrc = 'assets',
    devSrc = './dev',
    devPath = {
        html : devSrc+'/html/**/*.html'
    };

// html include and move
gulp.task('compile-html', function() {
    return gulp.src(devPath.html)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(include())
        .pipe(gulp.dest(''));
});

// misson2 = compile-sass
gulp.task('compile-sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        //.pipe(sourcemaps.init())
        .pipe(concat('theme.css'))
        .pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe(compass())
        .pipe(minifyCss())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(buildSrc+'/css'));
});


// misson4 = server
gulp.task('server', ['watch'], function () {
    console.log('server시작');
    var options = {
        uri: "http://localhost:8050/index.html",
        app: 'chrome'
    };
    return gulp.src("")
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(webserver({
            host:'127.0.0.1',
            livereload : true,
            port:8050
        }))
        .pipe(open(options));
});
// 파일 변경 감지 paths.js, paths.css, paths.html 해당 경로의 파일들의 수정이 일어나면 해당 테스크가 실행된다.
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['compile-sass']);
    gulp.watch(devPath.html, ['compile-html']);
});

/*
 gulp.task('clean', function () {
 return gulp.src(buildSrc, {read: false})
 .pipe(plumber({
 errorHandler: function (error) {
 console.log(error.message);
 this.emit('end');
 }}))
 .pipe(clean());
 });
 */
gulp.task('compile', ['watch', 'compile-sass', 'compile-html'], function(){
    gulp.start('server');
    console.log('서버 시작함');
});

//기본 task 설정
gulp.task('default', function(){
    gulp.start('compile');
});
