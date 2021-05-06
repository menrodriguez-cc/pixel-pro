// Dependencias
var gulp = require("gulp"),
  minifycss = require("gulp-minify-css"),
  deploy = require("gulp-gh-pages");

gulp.task("copy", function () {
  gulp.src("./**/*").pipe(gulp.dest("dist/"));
});

gulp.task("minify-css", function () {
  gulp.src("css/*.css").pipe(minifycss()).pipe(gulp.dest("dist/"));
});

gulp.task("build", ["copy", "minify-css"], function () {
  gulp.src("css/*.css").pipe(minifycss()).pipe(gulp.dest("dist/"));
});

gulp.task("deploy", ["build"], function () {
  return gulp.src("./dist/**/*").pipe(deploy());
});
