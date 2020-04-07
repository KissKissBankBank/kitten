export const computeFromRatio = ({
  defaultWidth,
  defaultHeight,
  width,
  height,
}) => {
  const ratio = defaultHeight / defaultWidth
  let computedWidth = null
  let computedHeight = null

  if (!width) {
    if (height) {
      computedWidth = height / ratio
      computedHeight = height
    } else {
      computedWidth = defaultWidth
      computedHeight = defaultHeight
    }
  } else {
    if (height) {
      computedWidth = width
      computedHeight = height
    } else {
      computedWidth = width
      computedHeight = width * ratio
    }
  }

  return {
    width: computedWidth,
    height: computedHeight,
  }
}
