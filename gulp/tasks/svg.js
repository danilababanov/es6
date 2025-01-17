module.exports = function() {
  $.gulp.task('svg', () =>  {
    return $.gulp.src('./src/img/svg/*.svg')
      .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
      }))

      .pipe($.gp.cheerio({
          run: function($) {
            $('[fill]').removeAttr('fill');
            $('[strake]').removeAttr('strake');
            $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true }
      }))

      .pipe($.gp.replace('&gt;', '>'))

      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }))

      .pipe($.gulp.dest('./build/img/svg/'));
  });
};
