/**
 * This module is a helper to create ReactElement against a DOM element with
 * specific data-attributes. These latter ones are listed in
 * `kitten/helpers/react/data-attributes`.
 *
 * @module 'kitten/helpers/react/element-helper'
 *
 * @see module:kitten/helpers/react/data-attributes
 */

import React from 'react'
import DOMHelper from 'kitten/helpers/react/dom-helper'
import ReactDataAttributes from 'kitten/helpers/react/data-attributes'

const ReactElementHelper = {
  /**
   * Returns the constructor that will be used by React.createElement.
   *
   * @param {string} elementType
   * @param {object}         availableComponents - list of available ReactComponents.
   * @param {ReactComponent} availableComponents.ReactComponentName
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
    return node.getAttribute(ReactDataAttributes.elementType)
  },

  /**
   * Returns an object of options.
   *
   * @param {DOMNode} node - a node with specific data-attributes.
   */
  getElementOptions(node) {
    // Props
    const jsonProps = node.getAttribute(ReactDataAttributes.elementProps)
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
      options['props']['key'] = i + 1

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
   * @param {object}         availableComponents - list of available ReactComponents.
   * @param {ReactComponent} availableComponents.ReactComponentName
   *
   * @param {object}  options - a list of options to create the ReactElement.
   * @param {object}  options.props - a list of the ReactElement props.
   * @param {array}   options.childNodes - a list of childnodes that stand for
   *                                       children or nested ReactElements.
   * @param {boolean} options.isDomElement - explicits if the ReactElement
   *                                         describe a DOM element.
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
