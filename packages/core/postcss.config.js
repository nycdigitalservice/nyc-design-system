import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'

export default {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 1,
    }),
  ]
}
