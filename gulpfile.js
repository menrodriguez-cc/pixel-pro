// Dependencias
var gulp = require("gulp"),
  minifycss = require("gulp-minify-css"),
  deploy = require("gulp-gh-pages"),
  del = require("del");

gulp.task("clean", function () {
  return del("docs/**", { force: true });
});

gulp.task("copy-html", async function () {
  gulp.src(["./**/*.html"]).pipe(gulp.dest("docs/"));
});

gulp.task("copy-assets", async function () {
  gulp.src(["./img/**/*"], { base: "./" }).pipe(gulp.dest("docs/"));
});

gulp.task("minify-css", async function () {
  gulp
    .src("css/*.css", { base: "./" })
    .pipe(minifycss())
    .pipe(gulp.dest("docs/"));
});

gulp.task(
  "build",
  gulp.series("clean", "copy-html", "copy-assets", "minify-css")
);

gulp.task(
  "deploy",
  gulp.series("build", async function () {
    return gulp.src("docs/**/*").pipe(
      deploy({
        branch: master,
      })
    );
  })
);
