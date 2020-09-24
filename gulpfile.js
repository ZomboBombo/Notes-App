"use strict";

var gulp = require("gulp");

// --- Вспомогательные утилиты ---
var rename = require("gulp-rename");

// --- Препроцессорные утилиты ---
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");

// --- CSS-утилиты ---
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");

// --- Серверные утилиты ---
var server = require("browser-sync").create();


/*
  ____________________________________________________

  ------------------ ЗАДАЧИ (TASKS) ------------------
  ____________________________________________________

*/

// *** Обработка всех SCSS-файлов и превращение в CSS ***
gulp.task("css", () => {
	return gulp.src("source/sass/styles.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
		.pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});


// *** Работа с Сервером ***
gulp.task("server", () => {
  server.init({
    server: "",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/js/**/*.js", gulp.series("refresh"));
  gulp.watch("*.html", gulp.series("refresh"));
});

gulp.task("refresh", done => {
  server.reload();
  done();
});


// === Главная задача для поднятия Сервера ===
gulp.task("start", gulp.series("server"));