import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'
import { LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import COLORS from 'kitten/constants/colors-config'

export class TeamCard extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTilte: PropTypes.string.isRequired,
  }

  static defaultProps = {}

  render() {
    return (
      <StyleRoot>
        <Marger top="2" bottom="1.4">
          {this.renderTitle()}
        </Marger>
        <Marger top="1.4">{this.renderIcons()}</Marger>
      </StyleRoot>
    )
  }

  // renderImage() {
  //   const { style, ...imageProps } = this.props.imageProps

  //   return <img {...imageProps} style={{ ...style, ...styles.image }} />
  // }

  renderTitle() {
    const { firstName, lastName, jobTitle } = this.props
    return (
      <Fragment>
        <Text size="default" weight="bold" color="font1">
          {firstName} {lastName}
        </Text>
        <br />
        <Text size="micro" color="font1" weight="light">
          {jobTitle}
        </Text>
      </Fragment>
    )
  }

  renderIcons() {
    const {} = this.props

    return (
      <div>
        <ButtonIcon
          modifier="hydrogen"
          aria-label=""
          className="k-ButtonIcon--phone"
        >
          <PhoneIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>

        <ButtonIcon
          modifier="hydrogen"
          aria-label=""
          className="k-ButtonIcon--phone"
        >
          <PhoneIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>

        <LinkedinButtonIcon />
      </div>
    )
  }
}

// const imageHeight = 378
// const imageWidth = 252

// const imgBackground = image => ({
//   backgroundImage: `url(${image})`,
//   backgroundColor: COLORS.background1,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   width: '100%',
//   paddingBottom: (imageHeight / imageWidth) * 100 + '%',
// })
