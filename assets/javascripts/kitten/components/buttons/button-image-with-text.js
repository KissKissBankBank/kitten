window.ButtonImageWithText = React.createClass({
  propTypes: {
    children: React.PropTypes.string,
    onClick: React.PropTypes.func,
    isExpanded: React.PropTypes.bool,
    text: React.PropTypes.string,
    title: React.PropTypes.string,
    srcImg: React.PropTypes.string,
    widthImg: React.PropTypes.number,
    heightImg: React.PropTypes.number,
    altImg: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      children: 'Toggle button',
      onClick: () => {}
    }
  },

  render: function() {
    const { className, isExpanded, text, title, classNameText,
            srcImg, widthImg, heightImg, altImg,
            ...rest } = this.props

    const buttonClassName = classNames('k-ButtonImageWithText', this.props.className)
    const textClassName = classNames('k-ButtonImageWithText__text', this.props.classNameText)

    return(
      <button className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ this.props.isExpanded }
              { ...rest }>
        <span ref="buttonImage" className="k-ButtonImage"
              title={ this.props.title }>
          <img className="k-ButtonImage__img"
               src={ this.props.srcImg }
               width={ this.props.widthImg }
               height={ this.props.heightImg }
               alt={ this.props.altImg } />
        </span>
        <p className={ textClassName }>{ this.props.text }</p>
      </button>
    )
  }
})
