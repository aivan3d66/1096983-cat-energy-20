  
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");
const del = require("del");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);

// Optimization

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.svgo()
]))
}

exports.images = images;

// Create sprite

const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
  .pipe(svgstore())
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("source/img"));
}

exports.sprite = sprite;

// Copying build

const copy = () => {
  return gulp.src([
    "source/img/**",
    "source/fonts/*.{woff,woff2}",
    "source/js/**",
    "source/*.ico",
    "source/*.html"
  ],{
    base:"source"
  })
  .pipe(gulp.dest("build"));
};
exports.copy = copy;

// Cleaning build

const clean = () => {
  return del ("build");
};
exports.clean = clean;

// Webp

const webpic = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({ality:90}))
  .pipe(gulp.dest("source/img"))
}
exports.webpic = webpic;

// Create build

const build = gulp.series(clean, images, copy, styles);

exports.build = build;