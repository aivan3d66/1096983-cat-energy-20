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
const htmlMinimizer = require("gulp-html-minimizer");
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');

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

// HTML

const minifyHTML = () => {
  return gulp.src("build/*.html")
    .pipe(htmlMinimizer({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.minifyHTML = minifyHTML;

const html = () => {
  return gulp.src('build/*.html')
    .pipe(posthtml([include()]))
    .pipe(gulp.dest('build'));
}

exports.html = html;

// Copying build

const copy = () => {
  return gulp.src([
    "source/img/**",
    "source/fonts/*.{woff,woff2}",
    "source/js/**",
    "source/*.ico",
    "source/*.html",
    "source/css/normalize.css"
  ],{
    base:"source"
  })
  .pipe(gulp.dest("build"));
};
exports.copy = copy;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  copy, styles, html, minifyHTML, server, watcher
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
  .pipe(gulp.dest("build/img"));
}

exports.sprite = sprite;

// Cleaning build

const clean = () => {
  return del ("build");
};
exports.clean = clean;

// Webp

const webpic = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({ality:90}))
  .pipe(gulp.dest("build/img"))
}
exports.webpic = webpic;

// Create build

const build = gulp.series(clean, images, sprite, webpic, copy, html, minifyHTML, styles);

exports.build = build;
