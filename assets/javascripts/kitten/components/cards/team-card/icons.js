import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { EmailIcon } from 'kitten/components/icons/email-icon'
import { LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { TeamCardPhoneIcon } from 'kitten/components/cards/team-card/phone-icon'

const Marger = Radium(MargerBase)

export class TeamCardIcons extends Component {
  static propTypes = {
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    socialLink: PropTypes.string,
  }

  static defaultProps = {
    email: '',
    phoneNumber: '',
    socialLink: '',
  }

  render() {
    const { email, phoneNumber, socialLink } = this.props

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

        {socialLink && (
          <LinkedinButtonIcon
            tag="a"
            href={socialLink}
            size="tiny"
            target="_blank"
            rel="noopener"
          />
        )}
      </Marger>
    )
  }
}

const styles = {
  icons: {
    display: 'flex',
  },
}
