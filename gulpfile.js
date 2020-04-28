const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const style = () => {
    return gulp.src('./src/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
}

const watch = () => {
    browserSync.init({
        server: { baseDir: './public' }
    });

    gulp.watch('./src/style.scss', style);
    gulp.watch("./public/*.*").on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;