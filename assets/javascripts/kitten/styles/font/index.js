export const fontStyles = ({ weight = 'light' } = {}) => {
  let styles = ['font-family: "Maax", Helvetica, Arial, sans-serif;']

  switch (weight) {
    case 'light':
      styles.push('font-weight: 400;')
      break
    case 'regular':
      styles.push('font-weight: 500;')
      break
    case 'bold':
      styles.push('font-weight: 600;')
      break
    case 'regular-uppercase':
      styles.push('font-weight: 500;')
      styles.push('text-transform: uppercase;')
      break
    case 'bold-uppercase':
      styles.push('font-weight: 600;')
      styles.push('text-transform: uppercase;')
      styles.push('letter-spacing: .1rem;')
      break
    default:
      break
  }

  return styles
}
