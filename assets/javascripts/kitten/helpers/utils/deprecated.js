export const checkDeprecatedSizes = size => {
  const deprecatedSizes = ['tiny', 'regular', 'default', 'normal', 'big']
  if (deprecatedSizes.includes(size)) {
    console.warn(
      `The value ${size} for prop size is deprecated. Please use 'small', 'medium' or 'large' instead.`,
    )
  }
}

export const checkDeprecatedWeights = weight => {
  const deprecatedWeights = ['light', 'regular', 'bold']
  if (deprecatedWeights.includes(weight)) {
    console.warn(
      `The value ${weight} for prop weight is deprecated. Please use '400', '500' or '700' instead.`,
    )
  }
}
