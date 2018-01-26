// DEPRECATED: This configuration is the Radium default configuration.

import Radium from 'radium'

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
    Radium.Plugins.checkProps,
  ],
}

export const ConfiguredRadium = component => Radium(config)(component)
