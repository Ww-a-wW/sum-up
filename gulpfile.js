const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const chalk = require('chalk');

const startTime = Date.now();

const ENV = process.env.NODE_ENV || 'prod';

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'src/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

gulp.task('compileCJS', () => {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
});

gulp.task('compileESM', () => {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
});

gulp.task('style', () => {
  const { styles } = paths;
  return gulp.src(styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
});

// 清空dist
gulp.task('clean', (done) => {
  const { dest } = paths;
  return gulp
    .src(['./' + dest.lib + '/**/*', './' + dest.esm + '/**/*'])
    .pipe(plumber())
    .pipe(clean());
});

// 主任务
gulp.task('main', gulp.parallel('compileCJS', 'compileESM', 'style'));

// 生产编译
gulp.task(
  'build',
  gulp.series('main', (done) => {
    done();
    const endTime = Date.now();
    console.log(chalk.blue('当前环境是：' + ENV));
    console.log(chalk.green('编译完成，用时' + (endTime - startTime) / 1000 + 's'));
  }),
);
