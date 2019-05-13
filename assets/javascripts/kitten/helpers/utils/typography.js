import ms from 'modularscale-js'
import TYPOGRAPHY from '../../constants/typography-config'

export const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0

  const sizeInRem = sizeInPx / TYPOGRAPHY.root

  return `${parseFloat(sizeInRem.toFixed(2))}rem`
}

export const stepToRem = step => {
  const settings = {
    base: [1],
    ratio: TYPOGRAPHY.scaleMultiplier,
  }
  return `${parseFloat(ms(step, settings).toFixed(2))}rem`
}
