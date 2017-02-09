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
      </div>
    )
  }

  renderButton(options, i) {
    const { label, closeOnClick, ...others } = options
    const handleClick = closeOnClick ? this.props.onCloseClick : null

    return <Button onClick={ handleClick }
                   key={ `k-Popover__button-${i}` }
                   { ...others }
                   children={ label } />
  }

  renderButtonsList() {
    return this.props.buttons.map(this.renderButton.bind(this))
  }

  render() {
    const {
      title,
      text,
      titleAriaLabelId,
      buttons,
      illustration,
      ...popoverProps
    } = this.props

    return (
      <Popover titleAriaLabelId={ titleAriaLabelId } { ...popoverProps }>
        { this.renderIllustration() }
        <div className="k-Popover__content">
          <p id={ titleAriaLabelId }
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
  illustration: null,
  buttons: [{
    label: "Ok",
    modifier: "boron",
    size: "big",
  }],
}
