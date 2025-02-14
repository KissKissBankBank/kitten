import capitalize from 'lodash/fp/capitalize'

export const margin = (options, asArray = false) => {
  const result = new Array()

  for (const [attribute, mediaQueries] of Object.entries(options)) {
    for (const [mediaQuery, value] of Object.entries(mediaQueries)) {
      const className = generateClassName({
        attribute,
        mediaQuery,
        value,
      })

      result.push(className)
    }
  }

  if (asArray) return result

  return result.join(' ')
}

const generateClassName = ({ attribute, mediaQuery, value }) => {
  let mediaQueryAddon = mediaQuery
  let outputValue = value

  if (mediaQuery === 'fromXxs' || mediaQuery === 'default') {
    mediaQueryAddon = ''
  } else {
    mediaQueryAddon = `@${mediaQuery.substring(4).toLowerCase()}-up`
  }

  if (typeof value === 'number') {
    outputValue = value < 0 ? 'negative' : ''

    const valueName = valuesNames[Math.abs(Math.floor(value))]

    outputValue += value < 0 ? capitalize(valueName) : valueName

    if (value % 1 > 0) {
      outputValue += 'Half'
    }
  }

  return `k-u-margin-${attribute}-${outputValue}${mediaQueryAddon}`
}

const valuesNames = [
  'none',
  'single',
  'double',
  'triple',
  'quadruple',
  'quintuple',
  'sextuple',
  'septuble',
  'octuple',
  'nonuple',
  'decuple',
]
