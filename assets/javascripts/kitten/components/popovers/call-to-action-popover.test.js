import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Popover } from 'kitten/components/popovers/popover'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'
import { Button } from 'kitten/components/buttons/button'

describe('<CallToActionPopover />', () => {
  describe('with default props', () => {
    const defaultComponent = shallow(
      <CallToActionPopover />)

    it('renders a title', () => {
      const title = defaultComponent.find('.k-Popover__title')

      expect(title).to.have.length(1)
    })

    it('renders a text', () => {
      const text = defaultComponent.find('.k-Popover__text')

      expect(text).to.have.length(1)
    })

    describe('navigation', () => {
      it('renders a navigation', () => {
        const navigation = defaultComponent.find('.k-Popover__navigation')

        expect(navigation).to.have.length(1)
      })

      it('renders buttons list', () => {
        const buttons = defaultComponent.find('.k-Popover__buttons')

        expect(buttons).to.have.length(1)
      })

      it('renders <Button /> elements', () => {
        const button = <Button modifier="boron" size="big">Ok</Button>

        expect(defaultComponent).to.contain(button)
      })
    })
  })

  describe('with basic props', () => {
    const buttons = [{
      label: "Découvrir",
      modifier: "boron",
      tag: "a",
      href: "http://www.catipsum.com",
      target: "_blank",
    }]

    const title = "Instantly break out"
    const text = "Spend all night ensuring people don't sleep"
    const component = shallow(
    <CallToActionPopover
      title={ title }
      text={ text }
      buttons={ buttons }
      ariaLabel="custom-aria-label" />
    )

    it('renders a title', () => {
      const titleComponent = component.find('.k-Popover__title')

      expect(titleComponent).to.have.length(1)
      expect(titleComponent).to.have.text(title)
    })

    it('renders a text', () => {
      const textComponent = component.find('.k-Popover__text')

      expect(textComponent).to.have.length(1)
      expect(textComponent).to.have.text(text)
    })

    it('assigns custom id for aria label', () => {
      const titleComponent = component.find('.k-Popover__title')

      expect(titleComponent).to.have
        .attr('id', 'custom-aria-label')
    })
  })

  describe('with illustration', () => {
    const componentWithIllustration = shallow(
      <CallToActionPopover illustration={ LoudspeakerIllustration } />)

    it('renders an illustration wrapper', () => {
      const illustration = componentWithIllustration.find('.k-Popover__illustration')
      expect(illustration).to.have.length(1)
    })

    it('renders illustration component', () => {
      const illustration = <LoudspeakerIllustration />
      expect(componentWithIllustration).to.contain(illustration)
    })
  })
})
