var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('reload_html', function() {
    gulp.src('**/*.html')
        .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('css/**/*.scss',['styles']);
    gulp.watch('**/*.html',['reload_html']);
    gulp.watch('js/**/*.js',['reload_js']);
})

gulp.task('default', ['webserver', 'watch']);
