import Radium from 'radium'
import { resolveArrayValue } from 'css-in-js-utils'

// Custom plugin to fix array values.
const radiumResolveArrayValue = (values) => {
  Object.keys(values.style).map(
    (key) => {
      const stylesByKey = values.style[key]

      if (Array.isArray(stylesByKey)) {
        values.style[key] = resolveArrayValue(key, stylesByKey)
      }
    }
  )
}

const config = {
  userAgent: 'all',
  plugins: [
    Radium.Plugins.mergeStyleArray,
    Radium.Plugins.checkProps,
    Radium.Plugins.resolveMediaQueries,
    Radium.Plugins.resolveInteractionStyles,
    Radium.Plugins.keyframes,
    Radium.Plugins.visited,
    Radium.Plugins.removeNestedStyles,
    Radium.Plugins.prefix,
    radiumResolveArrayValue,
    Radium.Plugins.checkProps,
  ],
}

export const ConfiguredRadium = component => Radium(config)(component)
