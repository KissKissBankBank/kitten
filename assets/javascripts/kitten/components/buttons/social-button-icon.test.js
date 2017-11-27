import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow } from 'enzyme'
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

    it('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'facebook')
    })

    it('has a <FacebookIcon />', () => {
      expect(button).to.have.descendants(FacebookIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<FacebookButtonIcon
                             className={ classNames('k-ButtonIcon__svg',
                                                    'custom__class') }
                           />)

    it('has a default classes', () => {
      expect(button).to.have.className('k-ButtonIcon__svg')
      expect(button).to.have.className('custom__class')
    })
  })
})

describe('<TwitterButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<TwitterButtonIcon />)

    it('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'twitter')
    })

    it('has a <TwitterIcon />', () => {
      expect(button).to.have.descendants(TwitterIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<TwitterButtonIcon
                             className={ classNames('k-ButtonIcon__svg',
                                                    'custom__class') }
                           />)

    it('has a default classes', () => {
      expect(button).to.have.className('k-ButtonIcon__svg')
      expect(button).to.have.className('custom__class')
    })
  })
})

describe('<LinkedinButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<LinkedinButtonIcon />)

    it('is a <ButtonIcon modifier="linkedin" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'linkedin')
    })

    it('has a <LinkedinIcon />', () => {
      expect(button).to.have.descendants(LinkedinIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<LinkedinButtonIcon
                             className={ classNames('k-ButtonIcon__svg',
                                                    'custom__class') }
                           />)

    it('has a default classes', () => {
      expect(button).to.have.className('k-ButtonIcon__svg')
      expect(button).to.have.className('custom__class')
    })
  })
})

describe('<InstagramButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<InstagramButtonIcon />)

    it('is a <ButtonIcon modifier="instagram" />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'instagram')
    })

    it('has a <InstagramIcon />', () => {
      expect(button).to.have.descendants(InstagramIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<InstagramButtonIcon
                             className={ classNames('k-ButtonIcon__svg',
                                                    'custom__class') }
                           />)

    it('has a default classes', () => {
      expect(button).to.have.className('k-ButtonIcon__svg')
      expect(button).to.have.className('custom__class')
    })
  })
})
