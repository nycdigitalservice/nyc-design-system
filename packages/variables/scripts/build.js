import StyleDictionary from 'style-dictionary'
import { resolve } from 'path'

const SRCDIR = resolve(process.cwd(), './tokens/dist')
const DESTDIR = resolve(process.cwd(), './src')

const baseTokens = ['ref', 'light', 'cmp']
const themes = ['dark']

StyleDictionary.registerTransform({
  name: 'nyc/length/px',
  type: 'value',
  matcher: token => token.path.includes('length'),
  transformer: token => `${token.value}px`
})

StyleDictionary.registerTransform({
  name: 'nyc/size/clamp',
  type: 'value',
  matcher: token => token.path.includes('length'),
  transformer: token => `${token.value}px`
})

const cssConfig = {
  prefix: 'nyc',
  transforms: ['attribute/cti', 'name/cti/kebab', 'nyc/length/px', 'color/hsl'],
  buildPath: `${DESTDIR}/`
}

const getThemeConfig = theme => ({
  include: [`${SRCDIR}/nyc.ref.tokens.json`],
  source: [`${SRCDIR}/**/nyc.${theme}.tokens.json`],
  platforms: {
    css: {
      ...cssConfig,
      files: [
        {
          destination: `${theme}.css`,
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: `:root${theme != 'light' ? '[data-theme="' + theme + '"]' : ''}`
          }
        }
      ]
    }
  }
})

const baseVariables = StyleDictionary.extend({
  include: baseTokens.map(t => `${SRCDIR}/nyc.${t}.tokens.json`),
  platforms: {
    css: {
      ...cssConfig,
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
})

baseVariables.buildAllPlatforms()

themes.map(theme => {
  StyleDictionary.extend(getThemeConfig(theme)).buildAllPlatforms()
})
