import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'
import { LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)

export class TeamCard extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTilte: PropTypes.string.isRequired,
    mail: PropTypes.string,
    phoneNumber: PropTypes.string,
    socialLink: PropTypes.string,
  }

  static defaultProps = {
    mail: '',
    phoneNumber: '',
    socialLink: '',
  }

  render() {
    return (
      <StyleRoot>
        <Marger bottom="2">{this.renderImage()}</Marger>
        <Marger top="2" bottom="1.4">
          {this.renderTitle()}
        </Marger>
        <Marger top="1.4">{this.renderIcons()}</Marger>
      </StyleRoot>
    )
  }

  renderImage() {
    const { image, imgTitle } = this.props
    return <div style={imgBackground(image)} title={imgTitle} />
  }

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
    const { mail, phoneNumber, socialLink } = this.props

    return (
      <div>
        {mail && (
          <ButtonIcon
            modifier="hydrogen"
            aria-label=""
            className="k-ButtonIcon--phone"
            style={styles.icons}
          >
            <PhoneIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {phoneNumber && (
          <ButtonIcon
            modifier="hydrogen"
            aria-label=""
            className="k-ButtonIcon--phone"
            style={styles.icons}
          >
            <PhoneIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {socialLink && <LinkedinButtonIcon size="tiny" />}
      </div>
    )
  }
}

const imageHeight = 378
const imageWidth = 252

const imgBackground = image => ({
  backgroundImage: `url(${image})`,
  backgroundColor: COLORS.background1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: imageHeight / imageWidth * 100 + '%',
})

const styles = {
  icons: {
    marginRight: 14,
  },
}
