import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ButtonIcon } from '../../../buttons/button-icon'
import { LinkedinIcon } from '../../../icons/linkedin-icon'
import { TwitterIcon } from '../../../icons/twitter-icon'
import { EmailIcon } from '../../../icons/email-icon'
import { TeamCardPhoneIcon } from './phone-icon'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledTeamCardIcons = styled.div`
  margin-top: ${pxToRem(15)};
  display: flex;

  > * {
    flex-shrink: 0;
  }

  .k-TeamCardIcons__buttonIcon:not(:last-child) {
    margin-right: ${pxToRem(15)};
  }
`

export const TeamCardIcons = ({
  email,
  phoneNumber,
  links,
  socialLink,
  ...props
}) => {
  const getSocialLinks = () => {
    if (links.length > 0) return links

    // handle deprecated `socialLink` prop
    if (socialLink) return [{ name: 'linkedin', href: socialLink }]
  }

  return (
    <StyledTeamCardIcons>
      {email && (
        <ButtonIcon
          size="tiny"
          tag="a"
          href={`mailto:${email}`}
          modifier="hydrogen"
          className="k-ButtonIcon--phone k-TeamCardIcons__buttonIcon"
          aria-label="E-mail"
        >
          <EmailIcon aria-hidden className="k-ButtonIcon__svg" />
        </ButtonIcon>
      )}

      {phoneNumber && (
        <TeamCardPhoneIcon
          {...props}
          phoneNumber={phoneNumber}
          className="k-TeamCardIcons__buttonIcon"
        />
      )}

      <SocialLinks links={getSocialLinks()} />
    </StyledTeamCardIcons>
  )
}

const SocialLinks = ({ links = [] }) => (
  <>
    {links.map(link => {
      if (!link.href) return

      return (
        <ButtonIcon
          tag="a"
          key={link.name}
          aria-label={link.name}
          href={link.href}
          modifier={`social_${link.name}`}
          target="_blank"
          rel="noopener"
          className="k-TeamCardIcons__buttonIcon"
          size="tiny"
        >
          {link.name === 'linkedin' && (
            <LinkedinIcon aria-hidden className="k-ButtonIcon__svg" />
          )}
          {link.name === 'twitter' && (
            <TwitterIcon aria-hidden className="k-ButtonIcon__svg" />
          )}
        </ButtonIcon>
      )
    })}
  </>
)

TeamCardIcons.propTypes = {
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(['linkedin', 'twitter']),
      href: PropTypes.string,
    }),
  ),

  // Deprecated.
  socialLink: deprecated(PropTypes.string, 'Prefer use links prop'),
}

TeamCardIcons.defaultProps = {
  email: '',
  phoneNumber: '',
  links: [],
}
