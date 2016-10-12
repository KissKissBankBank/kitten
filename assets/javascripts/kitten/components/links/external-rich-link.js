import React from 'react'
import classNames from 'classnames'

class ExternalRichLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const linkClassName = classNames('k-ExternalRichLink', this.props.className)

    return(
      <a className={ linkClassName } href={ this.props.href }>
        <div className="k-ExternalRichLink__element">
          { this.props.children }
        </div>

        <div className="k-ExternalRichLink__element
                        k-ExternalRichLink__element--animate">
          <span className="k-ButtonIcon k-ButtonIcon--tiny">
            <svg className="k-ButtonIcon__svg"
                 viewBox="0 0 10 10"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"/>
              <path d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"/>
            </svg>
          </span>
        </div>
      </a>
    );
  }
}

ExternalRichLink.defaultProps = {
  href: '#',
  children: 'I am a rich link!',
}

export default ExternalRichLink
