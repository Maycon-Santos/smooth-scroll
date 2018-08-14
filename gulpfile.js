const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', () => {

    const files = ['docs/js/vendor/**/*.js', 'docs/js/**/*.js'];

    // Normal
    gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('smooth-scroll.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));

    // Min
    gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('smooth-scroll.min.js'))
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));

});

gulp.task('default', ['js', 'watch']);

gulp.task('watch', () => {
    gulp.watch('docs/js/**/*.js', ['js']);
});