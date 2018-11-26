import React, { Component } from 'react'
import { Marger } from '../../components/layout/marger'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'
import { Popover } from '../../components/popovers/popover'
import { Button } from '../../components/buttons/button'

export class CallToActionPopover extends Component {
  constructor(props) {
    super(props)

    this.renderButton = this.renderButton.bind(this)
  }

  getButtonClickHandler(clickOptions) {
    if (!clickOptions) return

    if (clickOptions.closeOnClick) {
      return this.props.onCloseClick
    }
  }

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
    const { label, clickOptions, ...others } = options

    const clickHandler = this.getButtonClickHandler(clickOptions)

    return (
      <Button onClick={clickHandler} key={i} children={label} {...others} />
    )
  }

  renderButtonsList() {
    return this.props.buttons.map(this.renderButton)
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
      <Popover titleAriaLabelId={titleAriaLabelId} {...popoverProps}>
        {this.renderIllustration()}
        <Marger top="4" bottom="4" className="k-Popover__content">
          <Marger bottom="1">
            <Title id={titleAriaLabelId} modifier="senary" margin={false}>
              {title}
            </Title>
          </Marger>
          <Marger top="1" bottom="3">
            <Paragraph modifier="tertiary" margin={false}>
              {text}
            </Paragraph>
          </Marger>
          <Marger top="3">
            <div className="k-Popover__navigation">
              <div className="k-Popover__buttons">
                {this.renderButtonsList()}
              </div>
            </div>
          </Marger>
        </Marger>
      </Popover>
    )
  }
}

CallToActionPopover.defaultProps = {
  title: '',
  text: '',
  illustration: null,
  buttons: [
    {
      label: 'Ok',
      modifier: 'helium',
      size: 'big',
    },
  ],
  onCloseClick: null,
}
