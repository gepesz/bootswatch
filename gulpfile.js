'use strict';

var gulp = require('gulp');
var plug = require('gulp-load-plugins')({lazy: true});

gulp.task('default', ['styles']);
gulp.watch('./flatly/styles.scss', ['styles']);

/**
 * Compile sass to css.
 * @return {Stream}
 */
gulp.task('styles', function() {
    plug.util.log('Compiling Sass ==> CSS');

    return gulp
        .src('./flatly/styles.scss')
        .pipe(plug.concat('styles.css'))
        .pipe(plug.sass({
            includePaths: ['./bower_components/bootstrap-sass-official/assets/stylesheets/']
        }))
        .pipe(plug.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest('./flatly/'));
});