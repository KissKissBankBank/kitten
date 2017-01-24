import React from 'react'
import { Popover } from 'kitten/components/popovers/popover'
import { Button } from 'kitten/components/buttons/button'

export class CallToActionPopover extends React.Component {
  renderIllustration() {
    if (!this.props.withIllustration) return

    return (
    <div className="k-Popover__illustration">
      SVG style
    </div>)
  }

  renderButton(options) {
    const{ modifier, size, tag, label } = options

    return (
      <Button modifier={ modifier }
              size={ size }
              tag={ tag }>
        { label }
      </Button>
    )
  }

  renderButtonsList() {
    return this.props.buttons.map(this.renderButton)
  }

  render() {
    const{ title, text } = this.props

    return (
      <Popover>
        { this.renderIllustration() }
        <div className="k-Popover__content">
          <p id="dialogtitle"
             className="k-Popover__title">
            { title }
          </p>
          <p className="k-Popover__text">
            { text }
          </p>
          <div className="k-Popover__navigation">
            <div className="k-Popover__buttons">
              { this.renderButtonsList() }
            </div>
          </div>
        </div>
      </Popover>
    )
  }
}

CallToActionPopover.defaultProps = {
  title: "",
  text: "",
  withIllustration: false,
  buttons: null,
}
