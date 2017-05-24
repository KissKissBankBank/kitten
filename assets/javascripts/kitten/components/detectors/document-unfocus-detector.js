import React from 'react'

// Does not render HTML but listens for mouse and keyboard activity to add
// a `is-unfocused` class to the `<html>` element when the user is using a
// mouse.
export class DocumentUnfocusDetector extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  // We add our class if the mouse is beeing used.
  handleMouseDown() {
    document.documentElement.classList.add(this.props.className)
  }

  // On keydown, we consider that the user could be using his keyboard to tab
  // through elements, so we remove our class.
  handleKeyDown() {
    document.documentElement.classList.remove(this.props.className)
  }

  render() {
    return null
  }
}

DocumentUnfocusDetector.defaultProps = {
  className: 'k-u-unfocused',
}
