import path from 'path'

export const getScssPaths = () => {
  const kittenStylesheetsPath = path.join(__dirname, '../../assets/stylesheets')

  return [kittenStylesheetsPath]
}
