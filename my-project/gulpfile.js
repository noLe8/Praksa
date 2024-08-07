const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//logs message
gulp.task('message', function(done) {
    console.log('Gulp is running...');
    done(); 
});

//copy all HTML
gulp.task('copyHtml', function() {
    return gulp.src('**/*.html') // Adjust the path as needed
        .pipe(gulp.dest('dist')); // Adjust the destination as needed
});

//compile sass
gulp.task('sass', async function(){
    gulp.src('C:/Users/lakin/PhpstormProjects/Praksa/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('C:/Users/lakin/PhpstormProjects/Praksa/gulp_convert_scss'));
});

//watch for changes
gulp.task("watch", async function () {
    gulp.watch(
      "C:/Users/lakin/PhpstormProjects/Praksa/style.scss",
      gulp.series("sass")
    );
  });
