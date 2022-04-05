import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../../helpers/utils/typography'
import { Button } from '../../../../action/button'
import { LinkedinIcon } from '../../../../graphics/icons/linkedin-icon'
import { TwitterIcon } from '../../../../graphics/icons/twitter-icon'
import { EmailIcon } from '../../../../graphics/icons/email-icon'
import { TeamCardPhoneIcon } from './phone-icon'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledTeamCardIcons = styled.div`
  margin-top: ${pxToRem(15)};
  display: flex;

  > * {
    flex-shrink: 0;
  }

  gap: ${pxToRem(15)};
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
        <Button
          size="small"
          fit="icon"
          tag="a"
          href={`mailto:${email}`}
          modifier="hydrogen"
          aria-label="E-mail"
        >
          <EmailIcon aria-hidden />
        </Button>
      )}

      {phoneNumber && (
        <TeamCardPhoneIcon {...props} phoneNumber={phoneNumber} />
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
        <Button
          tag="a"
          fit="icon"
          key={link.name}
          aria-label={link.name}
          href={link.href}
          modifier="hydrogen"
          target="_blank"
          rel="noopener"
          size="small"
        >
          {link.name === 'linkedin' && <LinkedinIcon aria-hidden />}
          {link.name === 'twitter' && <TwitterIcon aria-hidden />}
        </Button>
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
