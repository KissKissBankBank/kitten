import TYPOGRAPHY from '../../constants/typography-config'

export const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0

  const sizeInRem = sizeInPx / TYPOGRAPHY.root

  return `${sizeInRem}rem`
}
