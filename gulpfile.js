var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('move-static', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

var jsFilesToWatch = ['src/**/*.js', 'src/**/*.jsx', '!node_modules/**'];
gulp.task('lint', () => {
       return gulp.src(jsFilesToWatch)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('lint-watch', ['lint'], () => {
    gulp.watch('src/**', ['lint'])
})
