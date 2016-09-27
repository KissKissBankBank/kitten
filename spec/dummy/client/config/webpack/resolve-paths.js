import path from 'path'
import kitten from 'kitten'

// Assets paths
const cssPath = path.resolve(__dirname, '../../../app/assets/stylesheets');
const assetPath = path.join(__dirname, '../../../app/assets')

// Rails app assets paths
const appCssPath = path.resolve(__dirname, '../../../app/assets/stylesheets');

// Sass load paths
const sassLoadPaths = kitten
                      .scssPaths
                      .concat([
                        cssPath,
                        appCssPath,
                      ]);

// Modules resolving paths
const nodeModulesPath = path.resolve(__dirname, '../../node_modules')
const resolvingPaths = kitten.jsPaths
                       .concat(nodeModulesPath)
                       .concat(kitten.imagesPaths)

const resolve_paths = {
  sass: sassLoadPaths,
  modules: resolvingPaths,
}

export default resolve_paths
