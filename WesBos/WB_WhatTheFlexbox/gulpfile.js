var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
  gulp.src('css/styles.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
  gulp.watch('css/styles.css', ['styles']);
});
