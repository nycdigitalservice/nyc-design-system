import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'

export default {
  plugins: [
    postcssImport(),
    postcssMixins(),
    postcssPresetEnv({
      stage: 1
    })
  ]
}
