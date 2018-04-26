import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import COLORS from 'kitten/constants/colors-config'
import PropTypes from 'prop-types'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { parseHtml } from 'kitten/helpers/utils/parser'

const Button = Radium(ButtonBase)

class ButtonSwithComponent extends Component {
  static propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
  }

  render(active) {
    const { firstText, secondText } = this.props

    const isActived = Radium.getState(this.state, 'button-switch', ':active')

    const buttonChildren = [
      active == true ? parseHtml(firstText) : parseHtml(secondText),
    ]

    return (
      <StyleRoot>
        <span key="button-switch" style={styles.switch}>
          <Button
            icon
            title={buttonChildren}
            aria-label={buttonChildren}
            modifier="azote"
            active={isActived}
          >
            <HeartIcon className="k-Button__icon" />
            {buttonChildren}
          </Button>
        </span>
      </StyleRoot>
    )
  }
}

const styles = {
  switch: {
    ':hover': {},
    ':focus': {},
    ':active': {},
    ':disabled': {},
  },
}

export const ButtonSwitch = Radium(ButtonSwithComponent)
