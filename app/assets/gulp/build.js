const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("optimizeImages", function() {
    return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
})

gulp.task("build", ["optimizeImages"]);