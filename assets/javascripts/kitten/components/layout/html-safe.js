import React from 'react'
import DOMPurify from 'dompurify';

export class HtmlSafe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      html: {
        __html: this.props.children,
      },
    }
  }

  componentDidMount() {
    this.setState({
      html: {
        __html: DOMPurify.sanitize(this.props.children),
      },
    })
  }

  render() {
    const { children, ...others } = this.props

    return (
      <div { ...others } dangerouslySetInnerHTML={ this.state.html } />
    )
  }
}
