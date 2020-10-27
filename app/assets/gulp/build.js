const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
// const uglify = require("gulp-uglify"); this is for JS   

gulp.task("deleteDocsFolder", () => {
    return del("./docs");
});

gulp.task("optimizeImages", ["deleteDocsFolder"], () => {
    return gulp.src("./app/assets/images/**/*")
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("usemin", ["deleteDocsFolder"], () => {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [() => {return rev()}, () => {return cssnano()}]
            // js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task("copyWebfonts", ["deleteDocsFolder"], () => {
    return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/*")
        .pipe(gulp.dest("./docs/assets/webfonts"));
});

gulp.task("build", ["deleteDocsFolder", "optimizeImages", "usemin", "copyWebfonts"]);