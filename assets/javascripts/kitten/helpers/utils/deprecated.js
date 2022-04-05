export const checkDeprecatedSizes = size => {
  const deprecatedSizes = ['tiny', 'regular', 'default', 'normal', 'big']
  if (deprecatedSizes.includes(size)) {
    console.warn(
      `The value ${size} for prop size is deprecated. Please use 'small', 'medium' or 'large' instead.`,
    )
  }
}
