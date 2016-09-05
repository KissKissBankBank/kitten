/**
 * This module lists the specific data-attributes that are used by kitten to
 * mount ReactElements. As data-attributes are strings, we will describe each
 * value as if it was JSON.parse().
 *
 * - selector {string}
 *   This data-attribute value is used to select all DOM elements that are used
 *   as containers for first level ReactElements on the page.
 *   DOM elements that represents child or nested ReactElements should not use
 *   this data-attribute.
 *
 * - elementType {string}
 *   This data-attribute value stands for the ReactElement type. It is used as
 *   the first parameter for React.createElement() method.
 *
 *  - elementProps {object}
 *  This data-attribute value lists all props of the ReactElement that will be
 *  rendered. It is used as the second parameter for React.createElement()
 *  method.
 *
 *  - componentMountOptions {object}
 *  This data-attribute value lists options that can be used to rendered the
 *  ReactElement:
 *    - isDomElement {boolean} - Explicits if the rendered ReactElement is a DOM
 *                               element
 *    - parentProp {string} ['children'] - Explicits if a nested ReactElement is
 *                                         a children ReactElement or another
 *                                         prop.
 *
 *  @module 'kitten/helpers/react/data-attributes'
 */

const reactDataAttributes = {
  selector: 'data-kitten-react',
  elementType: 'data-kitten-react-type',
  elementProps: 'data-kitten-react-props',
  componentMountOptions: 'data-kitten-react-mount-options',
}

export default reactDataAttributes
