var gulp   = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('default', ['styles', 'watch','autoprefixer']);

gulp.task('styles', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
		}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('*.html').on('change', browserSync.reload);
	   browserSync({
	     server:{
	       baseDir:'./',
	       directory: true
	     }
	}); 
});

gulp.task('autoprefixer', function () {
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});