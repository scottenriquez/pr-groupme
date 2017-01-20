let gulp = require('gulp');
let $ = require('gulp-load-plugins')({lazy: true});

gulp.task('validate', () => {
    return gulp
        .src([
            './*.js',
            './routes/*.js',
            './services/*.js'
        ])
        .pipe($.jscs())
        .pipe($.jshint({esversion: 6}))
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('build-dev', ['validate'], () => {
    let nodeOptions = {
        script: './bin/www',
        delayTime: 1,
        env: {
            'PORT': 3000,
            'NODE_ENV': 'Development'
        },
        watch: '*'
    };
    return $.nodemon(nodeOptions);
});