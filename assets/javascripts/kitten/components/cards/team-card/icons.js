import React, { Component, Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { EmailIcon } from 'kitten/components/icons/email-icon'
import { TeamCardPhoneIcon } from 'kitten/components/cards/team-card/phone-icon'

const Marger = Radium(MargerBase)

export class TeamCardIcons extends Component {
  static propTypes = {
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    socialNetworks: PropTypes.oneOf(['linkedin', 'twitter']),
  }

  static defaultProps = {
    email: '',
    phoneNumber: '',
    socialNetworks: '',
  }

  render() {
    const { email, phoneNumber, socialNetworks } = this.props

    return (
      <Marger top="1.5" style={styles.icons}>
        {email && (
          <ButtonIcon
            tag="a"
            href={`mailto:${email}`}
            modifier="hydrogen"
            className="k-ButtonIcon--phone"
            style={{ marginRight: 15 }}
          >
            <EmailIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {phoneNumber && <TeamCardPhoneIcon {...this.props} />}

        {socialNetworks && <SocialLinks socialNetworks={socialNetworks} />}
      </Marger>
    )
  }
}

class SocialLinks extends Component {
  render() {
    const { socialNetworks } = this.props

    return (
      <Fragment>
        {socialNetworks.map((socialNetwork, index) => {
          let buttonStyle
          if (index !== socialNetworks.length - 1) {
            buttonStyle = { marginRight: 15 }
          }

          return (
            <ButtonIcon
              tag="a"
              href={socialNetwork.href}
              modifier={socialNetwork.name}
              size="tiny"
              target="_blank"
              rel="noopener"
              style={buttonStyle}
            >
              {socialNetwork.name === 'linkedin' && (
                <LinkedinIcon className="k-ButtonIcon__svg" />
              )}
              {socialNetwork.name === 'twitter' && (
                <TwitterIcon className="k-ButtonIcon__svg" />
              )}
            </ButtonIcon>
          )
        })}
      </Fragment>
    )
  }
}

const styles = {
  icons: {
    display: 'flex',
  },
}
