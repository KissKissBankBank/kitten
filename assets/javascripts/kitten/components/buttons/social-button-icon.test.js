import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'

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
    const button = shallow(<FacebookButtonIcon className="custom__class" />)

    it('has custom class', () => {
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
    const button = shallow(<TwitterButtonIcon className="custom__class" />)

    it('has custom class', () => {
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
    const button = shallow(<LinkedinButtonIcon className="custom__class" />)

    it('has custom class', () => {
      expect(button).to.have.className('custom__class')
    })
  })
})
