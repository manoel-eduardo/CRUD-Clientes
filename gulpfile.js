var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

gulp.task('vendor', function() {
    var jsDest = './js/';

    return gulp.src(['./node_modules/angular/angular.js'])  
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(minify({ext: '.min.js'}))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['vendor']);