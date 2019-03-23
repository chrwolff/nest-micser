var gulp = require("gulp");
var ts = require('gulp-typescript');

gulp.task('ts', function () {
	var tsProject = ts.createProject('./tsconfig.json');
	var tsResult = gulp.src("./src/**/*.ts")
		.pipe(tsProject());

	return tsResult.js.pipe(gulp.dest('./release'));
});
