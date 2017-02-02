import path from 'path'
import kittenComponents from 'kitten-components'

// Assets paths
const cssPath = path.resolve(__dirname, '../../../app/assets/stylesheets');
const assetPath = path.join(__dirname, '../../../app/assets')

// Rails app assets paths
const appCssPath = path.resolve(__dirname, '../../../app/assets/stylesheets');
const appJsPath = path.join(__dirname, '../../javascripts')

// Sass load paths
const sassLoadPaths = kittenComponents
                      .scssPaths
                      .concat([
                        cssPath,
                        appCssPath,
                      ]);

// Modules resolving paths
const nodeModulesPath = path.resolve(__dirname, '../../node_modules')
const resolvingPaths = kittenComponents.jsPaths
                       .concat(appJsPath)
                       .concat(nodeModulesPath)
                       .concat(kittenComponents.imagesPaths)

const resolve_paths = {
  sass: sassLoadPaths,
  modules: resolvingPaths,
}

export default resolve_paths
