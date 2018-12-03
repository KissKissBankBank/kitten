import React, { Component, Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { EmailIcon } from 'kitten/components/icons/email-icon'
import { TeamCardPhoneIcon } from 'kitten/components/cards/team-card/phone-icon'
import deprecated from 'prop-types-extra/lib/deprecated'

const Marger = Radium(MargerBase)

export class TeamCardIcons extends Component {
  static propTypes = {
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    links: PropTypes.oneOf(['linkedin', 'twitter']),

    // Deprecated.
    socialLink: deprecated(
      PropTypes.string,
      'Prefer use <ButtonIcon href={link.href} name={link.name} />',
    ),
  }

  static defaultProps = {
    email: '',
    phoneNumber: '',
    links: '',
  }

  render() {
    const { email, phoneNumber, links, socialLink } = this.props

    let socialLinks = links
    if (socialLink) {
      socialLinks = [{ name: 'linkedin', href: socialLink }]
    }

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

        {links && <SocialLinks links={links} />}

        {socialLinks && <SocialLinks links={socialLinks} />}
      </Marger>
    )
  }
}

class SocialLinks extends Component {
  render() {
    const { links } = this.props

    return (
      <Fragment>
        {links.map((link, index) => {
          let buttonStyle
          if (index !== links.length - 1) {
            buttonStyle = { marginRight: 15 }
          }

          return (
            <ButtonIcon
              tag="a"
              href={link.href}
              modifier={link.name}
              size="tiny"
              target="_blank"
              rel="noopener"
              style={buttonStyle}
            >
              {link.name === 'linkedin' && (
                <LinkedinIcon className="k-ButtonIcon__svg" />
              )}
              {link.name === 'twitter' && (
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
