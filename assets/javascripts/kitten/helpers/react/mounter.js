// This helper is used to mount React component against a DOM node with specific
// attributes.
//
// Example:
//   html
//     <div data-react-class="MyReactComponent"
//          data-react-props="{&quot;my-prop-name&quot;:&quot;my-prop-value&quot;}">
//     </div>
//
//   js
//     ReactMounter.mountComponents();

const ReactMounter = {
  reactClassAttr: 'data-react-class',
  propsAttr: 'data-react-props',

  findDOMNodes() {
    const selector = '[' + this.reactClassAttr + ']'

    return document.querySelectorAll(selector)
  },

  mountComponents(availableComponents) {
    if (!Object.keys(availableComponents).length) return

    const nodes = this.findDOMNodes()

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]
      let reactClass = node.getAttribute(this.reactClassAttr)
      let constructor = availableComponents[reactClass]
      let jsonProps = node.getAttribute(this.propsAttr)
      let props = jsonProps && JSON.parse(jsonProps)

      if (typeof(constructor) === 'undefined') {
        let message = 'Cannot find component: `' + reactClass + '`'
        let error = new Error(message + '. Make sure your component is globally available to render.')
        throw error
      } else {
        ReactDOM.render(React.createElement(constructor, props), node);
      }
    }
  }
}

export default ReactMounter
