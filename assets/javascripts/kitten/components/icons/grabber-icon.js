import React from 'react'
import ReactDOM from 'react-dom'

class GrabberIcon extends React.Component {
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this)
    element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  }

  render() {
    return (
      <svg
        viewBox='0 0 100 100'
        {...this.props}
      >
        <path d='M0 0 v100 h20 v-100 z' />
        <path d='M40 0 v100 h20 v-100 z' />
        <path d='M80 0 v100 h20 v-100 z' />
      </svg>
    )
  }
}

export default GrabberIcon;
