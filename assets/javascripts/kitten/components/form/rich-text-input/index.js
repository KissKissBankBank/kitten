import React from 'react'
// Via "https://github.com/luigiinred/react-ckeditor-wrapper"
import CKEditor from 'react-ckeditor-wrapper'

// Make sure you include a script to React Ckeditor Wrapper.
// For example:
//   <script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>
export class RichTextInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: props.content,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ content: value })
    this.props.onChange({ value })
  }

  config() {
    const config = {
      ...this.props.config,
      defaultLanguage: this.props.locale,
      toolbar: this.props.toolbar,
    }

    return config
  }

  render() {
    return (
      <CKEditor
        value={this.state.content}
        config={this.config()}
        onChange={this.handleChange}
      />
    )
  }
}

RichTextInput.defaultProps = {
  onChange: () => {},
  content: '',
  locale: 'en',
  config: {
    removePlugins: 'elementspath',
    resize_enabled: false,
  },
  toolbar: [
    {
      name: 'basicstyles',
      items: ['Bold', 'Italic', 'Underline', 'Link', 'Image'],
    },
    {
      name: 'clipboard',
      items: ['Undo', 'Redo'],
    },
  ],
}
