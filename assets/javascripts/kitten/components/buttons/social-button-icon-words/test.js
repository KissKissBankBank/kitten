import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  LinkedinButtonIconWords,
} from '../../../components/buttons/social-button-icon-words'
import { Button } from '../../../components/buttons/button'
import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'

describe('<FacebookButtonIconWords />', () => {
  describe('by default', () => {
    const button = shallow(<FacebookButtonIconWords />)

    it('is a <Button modifier="facebook" />', () => {
      expect(button.find(Button).exists()).toBe(true)
      expect(button.props().modifier).toBe('facebook')
    })

    it('has a <FacebookIcon />', () => {
      expect(button.find(FacebookIcon).exists()).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = mount(
      <FacebookButtonIconWords>Lorem ipsum…</FacebookButtonIconWords>,
    )

    it('renders the right children', () => {
      expect(component.props().children).toEqual('Lorem ipsum…')
    })
  })
})

describe('<TwitterButtonIconWords />', () => {
  describe('by default', () => {
    const button = shallow(<TwitterButtonIconWords />)

    it('is a <Button modifier="twitter" />', () => {
      expect(button.find(Button).exists()).toBe(true)
      expect(button.props().modifier).toBe('twitter')
    })

    it('has a <TwitterIcon />', () => {
      expect(button.find(TwitterIcon).exists()).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = mount(
      <TwitterButtonIconWords>Lorem ipsum…</TwitterButtonIconWords>,
    )

    it('renders the right children', () => {
      expect(component.props().children).toEqual('Lorem ipsum…')
    })
  })
})

describe('<LinkedinButtonIconWords />', () => {
  describe('by default', () => {
    const button = shallow(<LinkedinButtonIconWords />)

    it('is a <Button modifier="linkedin" />', () => {
      expect(button.find(Button).exists()).toBe(true)
      expect(button.props().modifier).toBe('linkedin')
    })

    it('has a <LinkedinIcon />', () => {
      expect(button.find(LinkedinIcon).exists()).toBe(true)
    })
  })

  describe('children prop', () => {
    const component = mount(
      <LinkedinButtonIconWords>Lorem ipsum…</LinkedinButtonIconWords>,
    )

    it('renders the right children', () => {
      expect(component.props().children).toEqual('Lorem ipsum…')
    })
  })
})
