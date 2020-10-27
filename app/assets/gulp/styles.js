const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const importCSS = require("postcss-import");
const autoprefixer = require("autoprefixer");

gulp.task("styles", ["icons"], () => {
    return gulp.src("./app/assets/styles/main-style.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([importCSS, autoprefixer]))
        .pipe(gulp.dest("./app/prod/styles"))
});