import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { StarIcon } from 'kitten/components/icons/star-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import COLORS from 'kitten/constants/colors-config'

export class KarlStarButton extends Component {
  static propTypes = {
    size: PropTypes.string,
  }

  static defaultProps = {
    size: 'default',
  }

  render() {
    const { size } = this.props

    return (
      <ButtonIcon
        style={styles.buttonIcon}
        size={size}
        className="k-ButtonIcon--star"
      >
        <StarIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }
}

const styles = {
  buttonIcon: {
    backgroundColor: COLORS.font1,
    borderColor: COLORS.font1,
    cursor: 'auto',
  },
}
