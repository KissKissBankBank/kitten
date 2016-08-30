import React from 'react'
import DOMHelper from 'kitten/helpers/react/dom-helper'
import ReactDataAttributes from 'kitten/helpers/react/data-attributes'

const ReactElementHelper = {
  /**
   * Returns the constructor that will be used by React.createElement.
   *
   * @param {string} elementType
   * @param {object} availableComponents - an object with available React
   *   components
   * @param {boolean} isDomElement
   */
  getConstructor(elementType, availableComponents, isDomElement) {
    if (isDomElement) return elementType

    let constructor = availableComponents[elementType]

    if (typeof(constructor) === 'undefined') {
      let message = 'Cannot find component: `' + elementType + '`'
      let error = new Error(message + '. Make sure your component is globally available to render.')
      throw error
    }

    return constructor
  },

  /**
   * Returns the name of the ReactElement type to mount.
   *
   * @param {DOMNode} node - a node with specific data-attributes.
   */
  getElementType(node) {
    return node.getAttribute(ReactDataAttributes.componentName)
  },

  /**
   * Returns an object of options.
   *
   * @param {DOMNode} node - a node with specific data-attributes.
   */
  getElementOptions(node) {
    // Props
    const jsonProps = node.getAttribute(ReactDataAttributes.componentProps)
    const props = jsonProps && JSON.parse(jsonProps)

    // Children
    const childNodes = DOMHelper.getChildNodes(node)

    // Mount options
    const jsonMountOptions = node.getAttribute(ReactDataAttributes.componentMountOptions)
    const mountOptions = jsonMountOptions && JSON.parse(jsonMountOptions)

    let options = { props, childNodes }
    options = Object.assign(options, mountOptions)

    return options
  },

  /**
   * Returns an array of ReactElements depending on a DOM nodes list.
   *
   * @param {array} nodesList - an array of DOM nodes with specific
   *   data-attributes
   */
  createReactElementsList(nodesList, availableComponents) {
    let nodesListLength = nodesList.length
    let reactElements = []

    for (let i = 0; i < nodesListLength; i++) {
      let node = nodesList[i]
      let elementType = this.getElementType(node)
      let options = this.getElementOptions(node)

      // We have to assign a unique key to ReactElement children.
      // cf. https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
      options['props']['key'] = options.reactClass + i

      let reactElement = this.createElement(
        elementType,
        availableComponents,
        options
      )

      reactElements.push(reactElement)
    }

    return reactElements
  },

  /**
   * Returns a ReactElement.
   *
   * @param {string} elementType
   * @param {object} availableComponents - an object with available React
   *   components
   * @param {object} options - An object with these optional keys:
   *   - props {object}
   *   - childNodes {array}
   *   - isDomElement {boolean}
   */
  createElement(elementType, availableComponents, options) {
    let { props, childNodes, isDomElement } = options
    let constructor = this.getConstructor(
        elementType,
        availableComponents,
        isDomElement)
    let children

    if (childNodes.length) {
      children = this.createReactElementsList(childNodes, availableComponents)
    }

    return React.createElement(constructor, props, children)
  }
}

export default ReactElementHelper;
