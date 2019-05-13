import ms from 'modularscale-js'
import TYPOGRAPHY from '../../constants/typography-config'

export const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0

  const sizeInRem = sizeInPx / TYPOGRAPHY.root

  return `${sizeInRem}rem`
}

export const pxModularScale = step => {
  const settings = {
    base: [TYPOGRAPHY.root],
    ratio: TYPOGRAPHY.scaleMultiplier,
  }
  return ms(step, settings).toFixed(2)
}

export const modularScale = step => {
  return pxToRem(pxModularScale(step))
}
