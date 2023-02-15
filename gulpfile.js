var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

function styles() {
	return gulp.src('./src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src('./src/js/*.js')
	.pipe(uglify({
    	toplevel: true
  	 }))
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}

function watchFile() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	gulp.watch('./src/scss/*.scss', styles)
	gulp.watch('./src/js/*.js', scripts)
	gulp.watch('./index.html').on('change', browserSync.reload);
}

gulp.task('default', watchFile);
