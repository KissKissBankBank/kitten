// This helper is used to mount React component against a DOM node with specific
// attributes.
//
// Example:
//   html
//     <div data-react-type="MyReactComponent"
//          data-react-props="{&quot;my-prop-name&quot;:&quot;my-prop-value&quot;}">
//     </div>
//
//   js
//     ReactMounter.mountComponents();

import ReactDOM from 'react-dom'
import ReactDataAttributes from 'kitten/helpers/react/data-attributes'
import ReactElementHelper from 'kitten/helpers/react/element-helper'

const ReactMounter = {
  findDOMNodes() {
    const selector = '[' + ReactDataAttributes.selector + ']'

    return document.querySelectorAll(selector)
  },

  createReactElement(node, availableComponents) {
    const elementType = ReactElementHelper.getElementType(node)
    const options = ReactElementHelper.getElementOptions(node)

    return ReactElementHelper.createElement(
      elementType,
      availableComponents,
      options
    )
  },

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
