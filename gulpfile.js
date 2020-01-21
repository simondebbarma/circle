const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('prefixer', () => {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css/prefixers'));
});

gulp.task('clean', () => {
    return del([
        'css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));