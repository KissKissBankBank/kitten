import path from 'path'

export const getScssPaths = () => {
  const kittenStylesheetsPath = path.join(__dirname, '../../assets/stylesheets')
  const modularscalePath = require.resolve('modularscale-sass')

  return [kittenStylesheetsPath, path.join(modularscalePath, '..')]
}
