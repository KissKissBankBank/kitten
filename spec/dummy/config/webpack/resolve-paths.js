import path from 'path'
import kitten from 'kitten'

// Assets paths
const cssPath = path.resolve(__dirname, '../../webpack/stylesheets');
const jsPath = path.resolve(__dirname, '../../webpack/javascripts');
const assetPath = path.join(__dirname, '../../webpack')

// Rails app assets paths
const appCssPath = path.resolve(__dirname, '../../app/assets/stylesheets');

// Sass load paths
const sassLoadPaths = kitten
                      .scssPaths
                      .concat([
                        cssPath,
                        appCssPath,
                      ]);

// Js paths
const jsPaths = kitten.jsPaths.concat(jsPath)

// Modules resolving paths
const nodeModulesPath = path.resolve(__dirname, '../../node_modules')
const resolvingPaths = kitten.jsPaths
                       .concat(kitten.imagesPaths)
                       .concat(nodeModulesPath)
                       .concat(assetPath);

const RESOLVE_PATHS = {
  SASS: sassLoadPaths,
  JS: jsPaths,
  MODULES: resolvingPaths,
  LOADERS: nodeModulesPath
}

export default RESOLVE_PATHS
