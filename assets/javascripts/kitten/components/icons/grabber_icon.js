window.GrabberIcon = React.createClass({
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this)
    element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  },

  render: function() {
    return (
      <svg width='32'
           height='32'
           viewBox='0 0 100 100'
           {...this.props}>
        <path d='M0 0 v100 h20 v-100 z' />
        <path d='M40 0 v100 h20 v-100 z' />
        <path d='M80 0 v100 h20 v-100 z' />
      </svg>
    )
  }
})
