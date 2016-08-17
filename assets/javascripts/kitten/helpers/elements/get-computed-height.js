// TODO: When js files will be packed with Babel and Webpack, we have to migrate
// this module into an ES6 module.
window.kitten = window.kitten || {}
window.kitten.elements = (function(elements) {

  // Return element computed height with or without borders.
  elements.getComputedHeight = function(element, withBorder) {
    if (withBorder) {
      return element.getBoundingClientRect().height
    }

    return element.clientHeight
  }

  return elements

})(window.kitten.elements || {})
