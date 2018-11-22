import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'
import { LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { MailIcon } from 'kitten/components/icons/mail-icon'
import { TeamCardButtonWithTooltip } from 'kitten/components/cards/team-card/button-with-tooltip'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

const ButtonIcon = Radium(ButtonIconBase)

class TeamCardBase extends Component {
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
        <Marger top="2" bottom="1.5">
          {this.renderTitle()}
        </Marger>
        <Marger top="1.5">{this.renderIcons()}</Marger>
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

  renderPhoneIcon() {
    const { phoneNumber, viewportIsMobile } = this.props

    return (
      <Fragment>
        {viewportIsMobile && (
          <ButtonIcon
            href={`tel:${phoneNumber}`}
            modifier="hydrogen"
            aria-label="Phone"
            className="k-ButtonIcon--phone"
            style={styles.iconsList.icon}
          >
            <PhoneIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {!viewportIsMobile && <TeamCardButtonWithTooltip {...this.props} />}
      </Fragment>
    )
  }

  renderIcons() {
    const { mail, phoneNumber, socialLink } = this.props

    return (
      <div style={styles.iconsList}>
        {mail && (
          <ButtonIcon
            tag="a"
            href={`mailto:${mail}`}
            modifier="hydrogen"
            aria-label="Email"
            className="k-ButtonIcon--phone"
            style={styles.iconsList.icon}
          >
            <MailIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {phoneNumber && this.renderPhoneIcon()}

        {socialLink && (
          <LinkedinButtonIcon
            tag="a"
            href={socialLink}
            size="tiny"
            target="_blank"
            rel="noopener"
          />
        )}
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
  iconsList: {
    display: 'flex',

    icon: {
      marginRight: 10,
      [`@media (min-width: ${ScreenConfig.M.min}px)`]: {
        marginRight: 15,
      },
    },
  },
}

export const TeamCard = mediaQueries(TeamCardBase, {
  viewportIsMobile: true,
})
