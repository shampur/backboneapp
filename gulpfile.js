var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var colors = require('colors');

var jsConfig = {
    jssrc: './js/',
    jsmapsdir: './maps/',
    jsbuilddir: './dist/js/',
    cssbuilddir: './dist/css/',
    cssmapsdir: './maps/',
    outputfile: 'bundle.js',
    sasssrc: './sass/',
    builddir: './dist/',
    bulmadir: './node_modules/bulma/css/bulma.css',
    jquery: './node_modules/jquery/dist/jquery.slim.js',
    backbone: './node_modules/backbone/backbone-min.js',
    underscore: './node_modules/underscore/underscore.js',
    imagessrc: './images/'
};


gulp.task('serve', function() {
    connect.server({
        livereload: true,
        root: ['.', './dist/']
    });
});

gulp.task('livereload', function(){
    gulp.src('./dist/**/*')
        .pipe(connect.reload());
});

gulp.task('watch-and-reload', ['build'], function() {
    console.log(colors.green('Server reloading'));
    gulp.watch('./dist/**/*', ['livereload']);
});

gulp.task('build', ['dependencies', 'build-js', 'build-css', 'html']);

gulp.task('watch', function(){
    gulp.watch(jsConfig.sasssrc + '**', ['build-css']);
    gulp.watch(jsConfig.jssrc + '**', ['build-js']);
    gulp.watch('./index.html', ['html']);
});

gulp.task('build-js', function() {
        gulp.src([jsConfig.jssrc + '**'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write(jsConfig.jsmapsdir))
        .pipe(gulp.dest(jsConfig.jsbuilddir));
});

gulp.task('build-css', function() {
        gulp.src(jsConfig.sasssrc + '**')
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write(jsConfig.cssmapsdir))
        .pipe(gulp.dest(jsConfig.cssbuilddir));
});

gulp.task('dependencies', function() {
    gulp.src(jsConfig.bulmadir)
        .pipe(gulp.dest(jsConfig.builddir));
    gulp.src(jsConfig.imagessrc + '**')
        .pipe(gulp.dest(jsConfig.builddir + 'images/'));
    gulp.src([jsConfig.jquery, jsConfig.underscore, jsConfig.backbone])
        .pipe(concat('vendor-bundle.js'))
        .pipe(gulp.dest(jsConfig.jsbuilddir));
});

gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest(jsConfig.builddir));
});



gulp.task('default', ['build', 'serve', 'watch', 'watch-and-reload']);