var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

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
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        './node_modules/angular-input-masks/releases/angular-input-masks-dependencies.js',
        './node_modules/angular-input-masks/releases/angular-input-masks.br.js',
        './node_modules/angular-br-filters/release/angular-br-filters.js',
        './node_modules/moment/moment.js',
        './node_modules/angular-moment-picker/dist/angular-moment-picker.js'
    ];
    concatAndMinify(scripts, 'vendor.js', '.min.js', './www/js/');

    var styles = [
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/angular-moment-picker/dist/angular-moment-picker.css',
        './node_modules/font-awesome/css/font-awesome.css'
    ];
    concatAndMinify(styles, 'vendor.css', '.min.css', './www/css/');

    var fonts = './node_modules/font-awesome/fonts/**/*';
    gulp.src(fonts).pipe(gulp.dest('./www/fonts'));
});

gulp.task('views', function() {
    gulp.src('app/views/**/*.html').pipe(gulp.dest('./www/'));
});

gulp.task('scripts', function(){
    var angularApp = [
        './app/app.js',
        './app/routes.js'
    ];
    concatAndMinify(angularApp, 'app.js', '.min.js', './www/js/');

    var controllers = './app/controllers/**/*.controller.js';
    concatAndMinify(controllers, 'controllers.js', '.min.js', './www/js/');
});

gulp.task('stylesheets', function(){
    var stylesheets = [
        './app/css/*.css'
    ];
    concatAndMinify(stylesheets, 'app.css', '.min.css', './www/css/');
});

gulp.task('watch', function(){
    gulp.watch('app/**/*', ['views', 'scripts', 'stylesheets']);
}); 

gulp.task('default', ['vendor', 'views', 'scripts', 'stylesheets']);