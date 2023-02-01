const path = require("path");
const gulp = require("gulp");
const dotenv = require("dotenv");
const less = require("gulp-less");
const concat = require("gulp-concat");

dotenv.config({ override: false });

gulp.task("watch", () => {
  const compile = () => {
    return gulp
      .src("./src/**/*.less")
      .pipe(concat("Obsidian Carrot.css"))
      .pipe(
        less({
          paths: [path.join(__dirname, "less", "includes")],
        })
      )
      .pipe(gulp.dest(process.env.THEME_OUTPUT || "."));
  };

  gulp.watch("./src/**/*.less", gulp.series(compile));
});

gulp.task("build", () =>
  gulp
    .src("./src/**/*.less")
    .pipe(concat("theme.css"))
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
      })
    )
    .pipe(gulp.dest("."))
);
