var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

function concatAndMinify(files, fileName, extension, filePath){
    gulp.src(files)  
        .pipe(concat(fileName))
        .pipe(minify({ext: extension}))
        .pipe(gulp.dest(filePath));
}

gulp.task('vendor', function() {
    var scripts = [
        './node_modules/angular/angular.js',
        './node_modules/angular-route/angular-route.js',
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'
    ];
    concatAndMinify(scripts, 'vendor.js', '.min.js', './www/js/');

    var styles = [
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
        './node_modules/bootstrap/dist/css/bootstrap.css'
    ];
    concatAndMinify(styles, 'vendor.css', '.min.css', './www/css/');

    var angularApp = [
        './app/app.js',
        './app/routes.js'
    ];
    concatAndMinify(angularApp, 'app.js', '.min.js', './www/js/');
});

gulp.task('views', function() {
    gulp.src('app/views/**/*').pipe(gulp.dest('./www/'));
});

gulp.task('default', ['vendor', 'views']);