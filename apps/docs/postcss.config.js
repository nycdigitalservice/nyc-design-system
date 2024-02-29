import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import unoPostcss from '@unocss/postcss';

export default {
  plugins: [
    postcssImport(),
    postcssMixins(),
    postcssPresetEnv({
      stage: 1,
    }),
    unoPostcss()
  ]
}
