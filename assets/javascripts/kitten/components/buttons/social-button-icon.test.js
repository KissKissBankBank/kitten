import React from 'react'
import classNames from 'classnames'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { InstagramIcon } from 'kitten/components/icons/instagram-icon'
import { YoutubeIcon } from 'kitten/components/icons/youtube-icon'

describe('<FacebookButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<FacebookButtonIcon />)

    it('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('facebook')
    })

    it('has a <FacebookIcon />', () => {
      expect(button.find(FacebookIcon).exists()).toBe(true)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <FacebookButtonIcon
        className={classNames('k-ButtonIcon__svg', 'custom__class')}
      />,
    )

    it('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<TwitterButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<TwitterButtonIcon />)

    it('is a <ButtonIcon modifier="facebook" />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('twitter')
    })

    it('has a <TwitterIcon />', () => {
      expect(button.find(TwitterIcon).exists()).toBe(true)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <TwitterButtonIcon
        className={classNames('k-ButtonIcon__svg', 'custom__class')}
      />,
    )

    it('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<LinkedinButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<LinkedinButtonIcon />)

    it('is a <ButtonIcon modifier="linkedin" />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('linkedin')
    })

    it('has a <LinkedinIcon />', () => {
      expect(button.find(LinkedinIcon).exists()).toBe(true)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <LinkedinButtonIcon
        className={classNames('k-ButtonIcon__svg', 'custom__class')}
      />,
    )

    it('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<InstagramButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<InstagramButtonIcon />)

    it('is a <ButtonIcon modifier="instagram" />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('instagram')
    })

    it('has a <InstagramIcon />', () => {
      expect(button.find(InstagramIcon).exists()).toBe(true)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <InstagramButtonIcon
        className={classNames('k-ButtonIcon__svg', 'custom__class')}
      />,
    )

    it('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<YoutubeButtonIcon />', () => {
  describe('by default', () => {
    const button = shallow(<YoutubeButtonIcon />)

    it('is a <ButtonIcon modifier="youtube" />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('youtube')
    })

    it('has a <YoutubeIcon />', () => {
      expect(button.find(YoutubeIcon).exists()).toBe(true)
    })
  })

  describe('with other props', () => {
    const button = shallow(
      <YoutubeButtonIcon
        className={classNames('k-ButtonIcon__svg', 'custom__class')}
      />,
    )

    it('has a default classes', () => {
      expect(button.hasClass('k-ButtonIcon__svg')).toBe(true)
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})
