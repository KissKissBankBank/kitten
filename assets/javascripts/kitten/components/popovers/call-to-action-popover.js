import React from 'react'
import { Popover } from 'kitten/components/popovers/popover'
import { Button } from 'kitten/components/buttons/button'

export class CallToActionPopover extends React.Component {
  renderIllustration() {
    if (!this.props.illustration) return

    const Illustration = this.props.illustration
    return (
      <div className="k-Popover__illustration">
         <Illustration />
      </div>)
  }

  renderButton(options) {
    const { label, ...others } = options

    return (
      <Button { ...others }>
        { label }
      </Button>
    )
  }

  renderButtonsList() {
    return this.props.buttons.map(this.renderButton)
  }

  render() {
    const{ title, text, id } = this.props

    return (
      <Popover>
        { this.renderIllustration() }
        <div className="k-Popover__content">
          <p id={ id }
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
  id: "dialogtitle",
  title: "",
  text: "",
  illustration: null,
  buttons: null,
}
