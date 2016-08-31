/**
 * This module is a helper to mount React component against a DOM node with specific
 * data-attributes. These attributes are listed in
 * `kitten/helpers/react/data-attributes`.
 *
 * @module 'kitten/helpers/react/mounter'
 *
 * @see module:kitten/helpers/react/data-attributes
 * @see module:kitten/helpers/react/element-helper
 * @see module:kitten/helpers/react/dom-helper
 *
 * @example
 * // html
 *   <div data-kitten-react="true"
 *        data-kitten-react-type="MyReactComponent"
 *        data-kitten-react-props="{&quot;my-prop-name&quot;:&quot;my-prop-value&quot;}">
 *   </div>
 *
 * // js
 *   import ReactMounter from 'kitten/helpers/react/mounter'
 *
 *   ReactMounter.mountComponents()
 */

import ReactDOM from 'react-dom'
import ReactDataAttributes from 'kitten/helpers/react/data-attributes'
import ReactElementHelper from 'kitten/helpers/react/element-helper'

const ReactMounter = {
  /**
   * Returns a DOM nodes list.
   * These nodes are DOM element containers used to render ReactElements.
   */
  findDOMNodes() {
    const selector = '[' + ReactDataAttributes.selector + ']'

    return document.querySelectorAll(selector)
  },

  /**
   * Returns a ReactElement based on specific data-attributes of a DOM element.
   *
   * @param {DOMNode} node - a node with specific data-attributes.
   * @param {object}         availableComponents - list of available ReactComponents.
   * @param {ReactComponent} availableComponents.ReactComponentName
   */
  createReactElement(node, availableComponents) {
    const elementType = ReactElementHelper.getElementType(node)
    const options = ReactElementHelper.getElementOptions(node)

    return ReactElementHelper.createElement(
      elementType,
      availableComponents,
      options
    )
  },

  /**
   * Renders ReactElements based on DOM elements with the data-attribute
   * `kitten-react`.
   *
   * @param {object}         availableComponents - list of available ReactComponents.
   * @param {ReactComponent} availableComponents.ReactComponentName
   */
  mountComponents(availableComponents) {
    if (!Object.keys(availableComponents).length) return

    const nodes = this.findDOMNodes()

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]
      let reactElement = this.createReactElement(node, availableComponents)

      ReactDOM.render(reactElement, node);
    }
  }
}

export default ReactMounter
