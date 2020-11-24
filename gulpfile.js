'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('compile_sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*.scss', gulp.series('compile_sass'));
});