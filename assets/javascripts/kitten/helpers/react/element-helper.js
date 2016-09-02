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
import domNodeHelper from 'kitten/helpers/dom/node-helper'
import reactDataAttributes from 'kitten/helpers/react/data-attributes'
import objectUtils from 'kitten/helpers/utils/object'
import assignUtils from 'kitten/helpers/utils/assign'

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
    return node.getAttribute(reactDataAttributes.elementType)
  },

  /**
   * Returns an object of options.
   *
   * @param {DOMNode} node - a node with specific data-attributes.
   */
  getElementOptions(node) {
    // Props
    const jsonProps = node.getAttribute(reactDataAttributes.elementProps)
    const props = jsonProps && JSON.parse(jsonProps)

    // Children
    const childNodes = domNodeHelper.getChildNodes(node)

    // Mount options
    const jsonMountOptions = node.getAttribute(reactDataAttributes.componentMountOptions)
    const mountOptions = jsonMountOptions && JSON.parse(jsonMountOptions)

    let options = { props, childNodes }
    options = Object.assign(options, mountOptions)

    return options
  },

  /**
   * Returns children of a ReactElement that will be rendered with its children
   * ReactElements.
   *
   * @param {object} nestedReactElements
   */
  getChildren(nestedReactElements) {
    if (!nestedReactElements.children) return null

    return nestedReactElements.children
  },

  /**
   * Returns props of a ReactElement. This latter can be rendered with some
   * props that contains a list of ReactElements.
   *
   * @param {object} props
   * @param {object} nestedReactElements
   */
  updatePropsWithNestedElements(props, nestedReactElements) {
    const propsNames = Object.keys(nestedReactElements)
                           .filter(this.isNotChildrenProp)

    if (!propsNames.length) return props

    const propsWithNestedElements = objectUtils.pick(
      propsNames,
      nestedReactElements
    )

    return Object.assign(props, propsWithNestedElements)
  },

  /**
   * Returns an array of ReactElements depending on a DOM nodes list.
   *
   * @param {array} nodesList - an array of DOM nodes with specific
   *   data-attributes
   */
  createReactElementsList(nodesList, availableComponents) {
    let nodesListLength = nodesList.length
    let reactElements = {}

    for (let i = 0; i < nodesListLength; i++) {
      let node = nodesList[i]
      let elementType = this.getElementType(node)
      let options = this.getElementOptions(node)
      let parentProp = options.parentProp

      if (parentProp == 'children') {
        // We have to assign a unique key to ReactElement children.
        // cf. https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        options['props']['key'] = i + 1
      }

      let reactElement = this.createElement(
        elementType,
        availableComponents,
        options
      )

      let propContent = reactElements[parentProp]
      let newPropContent = assignUtils.singleValueOrToArray(
        propContent,
        reactElement
      )

      reactElements[parentProp] = newPropContent
    }

    return reactElements
  },

  /**
   * Returns if a prop is not props.children
   *
   * @param {string} prop
   */
  isNotChildrenProp(prop) {
    if (prop != 'children') return true
    return false
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
   * @param {array}   options.childNodes - a list of childnodes that will be
   *                                       rendered as children or nested ReactElements.
   * @param {boolean} options.isDomElement - explicits if the ReactElement
   *                                         describe a DOM element.
   */
  createElement(elementType, availableComponents, options) {
    let { props, childNodes, ...mountOptions } = options
    let constructor = this.getConstructor(
        elementType,
        availableComponents,
        mountOptions.isDomElement)
    let children

    // Create nested or children ReactElements lists
    if (childNodes.length) {
      const nestedReactElements = this.createReactElementsList(
        childNodes,
        availableComponents
      )

      props = this.updatePropsWithNestedElements(props, nestedReactElements)
      children = this.getChildren(nestedReactElements)
    }

    // Append text nodes
    if (mountOptions.text) children = mountOptions.text

    return React.createElement(constructor, props, children)
  }
}

export default ReactElementHelper;
