import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Marger } from 'kitten/components/layout/marger'
import { MailIcon } from 'kitten/components/icons/mail-icon'
import { LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { TeamCardPhoneIcon } from 'kitten/components/cards/team-card/phone-icon'

export class TeamCardIcons extends Component {
  static propTypes = {
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
    const { mail, phoneNumber, socialLink } = this.props

    return (
      <Marger top="1.5" style={{ display: 'flex' }}>
        {mail && (
          <ButtonIcon
            tag="a"
            href={`mailto:${mail}`}
            modifier="hydrogen"
            className="k-ButtonIcon--phone"
            style={{ marginRight: 15 }}
          >
            <MailIcon className="k-ButtonIcon__svg" />
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
