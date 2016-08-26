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
    altImg: React.PropTypes.string,
  },
  // Lifecycle
  getDefaultProps: function() {
    return {
      children: 'Toggle button',
      onClick: () => {},
    }
  },

  render: function() {
    const { className, isExpanded, text, title, classNameText,
            srcImg, widthImg, heightImg, altImg,
            ...rest } = this.props

    const buttonClassName = classNames('k-ButtonImageWithText', className)
    const textClassName = classNames('k-ButtonImageWithText__text', classNameText)

    return(
      <button className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ isExpanded }
              title={ title }
              { ...rest }>
        <span ref="buttonImage" className="k-ButtonImage">
          <img className="k-ButtonImage__img"
               src={ srcImg }
               width={ widthImg }
               height={ heightImg }
               alt={ altImg } />
        </span>
        <p className={ textClassName }>{ text }</p>
      </button>
    )
  }
})
