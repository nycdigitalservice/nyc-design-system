import { readFileSync, writeFile } from 'fs'
import { resolve } from 'path'

const SRCDIR = resolve(process.cwd(), './tokens/src')
const DESTDIR = resolve(process.cwd(), './tokens/dist')

const data = readFileSync(`${SRCDIR}/nyc.tokens.json`, {})

const tokens = JSON.parse(data)

const getThemes = obj => {
  return Object.keys(obj.sys)
}

const themes = getThemes(tokens)

// console.log(data, themes);

const writeTokenFile = (obj, filename) => {
  const objStr = JSON.stringify(obj, null, 2)
  writeFile(
    filename,
    objStr,
    error => {
      if (error) {
        console.log('An error has occurred ', error)
        return
      }
      console.log('Data written successfully to disk')
    }
  )
}

const removeThemeRefs = (obj, themes) => {
  const regex = new RegExp(`\\.(${themes.toString().replace(',', '|')})`, 'g')
  return JSON.parse(
    JSON.stringify(obj).replace(regex, '')
  )
}

const removeClampRefs = obj => {
  // const regex = new RegExp(`\\.(${themes.toString().replace(',','|')})`, 'g');
  const tokensStr = JSON.stringify(obj)
  const matches = [...tokensStr.matchAll(new RegExp('fluid\\.[A-Za-z0-9]+\\.max', 'g'))]
  // console.log(matches);
  const newStr = matches.reduce((acc, cur) => {
    return acc.replaceAll(cur[0], cur[0].substring(0, cur[0].length - 4))
  }, tokensStr)
  // console.log(newStr)
  const tokens = JSON.parse(newStr)
  // console.log(tokens);
  return tokens
}

const getTokenValue = (reference, tokens) => {
  return reference.replace(/[{}]/g, '').split('.').reduce((acc, cur) => acc[cur], tokens).value
}

const getClampVal = (pageMin, pageMax, minVal, maxVal) => {
  const factor = 1 / (pageMax - pageMin) * (maxVal - minVal)
  const calc1 = `${minVal - (pageMin * factor)}rem`
  const calc2 = `${100 * factor}vw`
  const calcV = `${calc1} + ${calc2}`
  const clamp = `clamp(${minVal}rem, ${calcV}, ${maxVal}rem)`
  return clamp
}

const clampTokens = (tokens, theme) => {
  const pageMin = getTokenValue(tokens.sys[theme].size.width.page.min.value, tokens) / 16
  const pageMax = getTokenValue(tokens.sys[theme].size.width.page.max.value, tokens) / 16
  const fluidHeadings = tokens.sys[theme].size.heading.fluid
  const fluidBody = tokens.sys[theme].size.body.fluid
  const fluidSpacing = tokens.sys[theme].space.fluid
  if (fluidHeadings) {
    Object.keys(fluidHeadings).map(heading => {
      const minV = getTokenValue(fluidHeadings[heading].min.value, tokens) / 16
      const maxV = getTokenValue(fluidHeadings[heading].max.value, tokens) / 16
      const clamp = getClampVal(pageMin, pageMax, minV, maxV)
      tokens.sys[theme].size.heading.fluid[heading] = { type: 'dimension', value: clamp }
    })
  }
  if (fluidSpacing) {
    Object.keys(fluidSpacing).map(space => {
      const minV = getTokenValue(fluidSpacing[space].min.value, tokens) / 16
      const maxV = getTokenValue(fluidSpacing[space].max.value, tokens) / 16
      const clamp = getClampVal(pageMin, pageMax, minV, maxV)
      tokens.sys[theme].space.fluid[space] = { type: 'dimension', value: clamp }
    })
  }
  if (fluidBody) {
    Object.keys(fluidBody).map(body => {
      const minV = getTokenValue(fluidBody[body].min.value, tokens) / 16
      const maxV = getTokenValue(fluidBody[body].max.value, tokens) / 16
      const clamp = getClampVal(pageMin, pageMax, minV, maxV)
      tokens.sys[theme].size.body.fluid[body] = { type: 'dimension', value: clamp }
    })
  }
  return removeClampRefs(tokens)
}

// The token file includes references to Figma variable modes which we
// dont want, like dark in {sys.dark.space.lg}, so we strip them out.
const cleanTokens = removeThemeRefs(tokens, themes)

themes.forEach(theme => {
  const filename = `${DESTDIR}/nyc.${theme}.tokens.json`
  const transformedTokens = clampTokens(cleanTokens, theme)
  writeTokenFile({ sys: transformedTokens.sys[theme] }, filename)
})

const tiers = ['ref', 'cmp']

tiers.forEach(tier => {
  const filename = `${DESTDIR}/nyc.${tier}.tokens.json`
  const transformedTokens = removeClampRefs(cleanTokens)
  writeTokenFile({ [tier]: transformedTokens[tier] }, filename)
})
