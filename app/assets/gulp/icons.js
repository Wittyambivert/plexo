const gulp = require("gulp");

gulp.task("icons", () => {
    return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/*")
        .pipe(gulp.dest(["./app/prod/webfonts", "./docs/webfonts"]))
        .pipe(gulp.dest("./app/prod/webfonts"))
})