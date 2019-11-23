var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('app/assets/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css'))
});
gulp.task('watch', function () {
        gulp.watch('app/assets/sass/*.sass', gulp.series('scss'))
    }
);

gulp.task('default', gulp.series('scss', 'watch'));