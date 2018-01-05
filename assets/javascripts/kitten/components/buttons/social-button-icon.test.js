import React from 'react'
import classNames from 'classnames'

import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { InstagramIcon } from 'kitten/components/icons/instagram-icon'

describe('<FacebookButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<FacebookButtonIcon />)

    test('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'facebook')
    })

    test('has a <FacebookIcon />', () => {
      expect(button).to.have.descendants(FacebookIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <FacebookButtonIcon
        className={ classNames('k-ButtonIcon__svg',
                               'custom__class') }
      />
    )

    test('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<TwitterButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<TwitterButtonIcon />)

    test('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'twitter')
    })

    test('has a <TwitterIcon />', () => {
      expect(button).to.have.descendants(TwitterIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <TwitterButtonIcon
        className={ classNames('k-ButtonIcon__svg',
                               'custom__class') }
      />
    )

    test('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<LinkedinButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<LinkedinButtonIcon />)

    test('is a <ButtonIcon modifier="linkedin" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'linkedin')
    })

    test('has a <LinkedinIcon />', () => {
      expect(button).to.have.descendants(LinkedinIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <LinkedinButtonIcon
        className={ classNames('k-ButtonIcon__svg',
                               'custom__class') }
      />
    )

    test('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<InstagramButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<InstagramButtonIcon />)

    test('is a <ButtonIcon modifier="instagram" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'instagram')
    })

    test('has a <InstagramIcon />', () => {
      expect(button).to.have.descendants(InstagramIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <InstagramButtonIcon
        className={ classNames('k-ButtonIcon__svg',
                               'custom__class') }
      />
    )

    test('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})
