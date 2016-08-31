/**
 * This module is a helper to fetch DOM elements.
 *
 * @module 'kitten/helpers/react/dom-helper'
 */

const DOMHelper = {
  /**
   * Returns an array of DOM nodes without text nodes.
   *
   * @param {DOMNode} node - the node of which you want to fetch child nodes.
   */
  getChildNodes(node) {
    const childNodes = node.childNodes
    const childNodesLength = childNodes.length
    let filteredChildNodes = []

    for (let i = 0; i < childNodesLength; i++) {
      // nodeType 3 matches text node.
      // cf. https://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html#ID-1950641247
      if (childNodes[i].nodeType != 3) {
        filteredChildNodes.push(childNodes[i])
      }
    }

    return filteredChildNodes
  },
}

export default DOMHelper
