// TODO: description
window.ButtonImageWithTextAndBadge = React.createClass({
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
    notifications: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      children: 'Toggle button',
      onClick: () => {},
    }
  },

  render: function() {
    const {
      className,
      isExpanded,
      text,
      title,
      classNameText,
      srcImg,
      widthImg,
      heightImg,
      altImg,
      notifications,
      ...rest
    } = this.props

    const textClassName = classNames('k-ButtonImageWithText__text',
                                     classNameText)
    const buttonClassName = notifications > 0 ?
                            classNames('k-ButtonWithBadge', buttonClassName) :
                            classNames('k-ButtonImageWithText', className)
    return(
      <span className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ isExpanded }
              title={ title }
              { ...rest }>
        <span className="k-ButtonWithBadge">
          <span ref="buttonImage" className="k-ButtonImage">
            <img className="k-ButtonImage__img"
                 src={ srcImg }
                 width={ widthImg }
                 height={ heightImg }
                 alt={ altImg } />
          </span>
          <span className="k-ButtonWithBadge__badge k-Badge">
            { notifications }
          </span>
        </span>
        <p className={ textClassName }>{ text }</p>
      </span>
    )
  }
})
