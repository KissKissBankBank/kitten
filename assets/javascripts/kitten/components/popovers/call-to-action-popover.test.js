import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Popover } from 'kitten/components/popovers/popover'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'
import { Button } from 'kitten/components/buttons/button'

describe('<CallToActionPopover />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<CallToActionPopover />)

    it('renders a title element', () => {
      const titleElement = defaultComponent.find('.k-Popover__title')

      expect(titleElement).to.have.length(1)
    })

    it('renders a text element', () => {
      const textElement = defaultComponent.find('.k-Popover__text')

      expect(textElement).to.have.length(1)
    })

    describe('navigation', () => {
      it('renders a navigation element', () => {
        const navigationElement = defaultComponent.find('.k-Popover__navigation')

        expect(navigationElement).to.have.length(1)
      })

      it('renders buttons list', () => {
        const buttonsList = defaultComponent.find('.k-Popover__buttons')

        expect(buttonsList).to.have.length(1)
      })

      it('renders a <Button /> component', () => {
        const buttonComponent = (
          <Button onClick={ undefined }
                 modifier="boron"
                 size="big">
            Ok
          </Button>
        )

        expect(defaultComponent).to.contain(buttonComponent)
      })
    })
  })

  describe('title prop', () => {
    const title = "Instantly break out"
    const component = mount(<CallToActionPopover title={ title } />)
    const titleElement= component.find('.k-Popover__title')

    it('renders a title element', () => {
      expect(titleElement).to.have.length(1)
      expect(titleElement).to.have.text(title)
    })
  })

  describe('text prop', () => {
    const text = "Spend all night ensuring people don't sleep"
    const component = mount(<CallToActionPopover text={ text } />)
    const textElement = component.find('.k-Popover__text')

    it('renders a text element', () => {
      expect(textElement).to.have.length(1)
      expect(textElement).to.have.text(text)
    })
  })

  describe('buttons prop', () => {
    const button1Label = 'Découvrir'
    const button1Modifier = 'berryllium'
    const button1Tag = 'a'
    const button1Href = 'http://www.catipsum.com'
    const button1Target = '_blank'

    const button2Label = 'Retour'

    const buttons = [{
      label: button1Label,
      modifier: button1Modifier,
      tag: button1Tag,
      href: button1Href,
      target: button1Target,
    }, {
      label: button2Label,
    }]

    const component = mount(<CallToActionPopover buttons={ buttons } />)
    const buttonComponents = component.find(Button)

    it('renders 2 <Button /> components', () => {
      expect(buttonComponents).to.have.length(2)
    })

    it('passes the right props to the first <Button />', () => {
      const buttonComponent = buttonComponents.first()
      const expectedProps = {
        children: button1Label,
        modifier: button1Modifier,
        tag: button1Tag,
        href: button1Href,
        target: button1Target,
      }

      expect(buttonComponent.props()).to.contain.all.keys(expectedProps)
    })

    it('passes the right props to the second <Button />', () => {
      const buttonComponent = buttonComponents.first()
      const expectedProps = {
        children: button2Label,
      }

      expect(buttonComponent.props()).to.contain.all.keys(expectedProps)
    })

    describe('with close callback on a button', () => {
      const buttons = [{
        clickOptions: {
          closeOnClick: true,
        }
      }]
      const onCloseClick = () => { return }

      const component = mount(<CallToActionPopover
        buttons={ buttons }
        onCloseClick={ onCloseClick }
      />)

      it('passes a onClick prop to the <Button />', () => {
        const buttonComponent = buttonComponents.first()
        const expectedProps = {
          onClick: onCloseClick,
        }

        expect(buttonComponent.props()).to.contain.all.keys(expectedProps)
      })
    })
  })

  describe('titleAriaLabelId prop', () => {
    const component = mount(
      <CallToActionPopover titleAriaLabelId="custom-aria-label" />
    )
    const titleElement = component.find('.k-Popover__title')

    it('assigns custom id for aria label', () => {
      expect(titleElement).to.have.attr('id', 'custom-aria-label')
    })
  })

  describe('illustration prop', () => {
    const componentWithIllustration = shallow(
      <CallToActionPopover illustration={ LoudspeakerIllustration } />)

    it('renders an illustration wrapper', () => {
      const illustration = componentWithIllustration
        .find('.k-Popover__illustration')

      expect(illustration).to.have.length(1)
    })

    it('renders illustration component', () => {
      const illustration = <LoudspeakerIllustration />

      expect(componentWithIllustration).to.contain(illustration)
    })
  })

  describe('custom props', () => {
    const component = mount(
      <CallToActionPopover popoverClassName="custom-popover" />
    )

    it('propagates props to <Popover />', () => {
      const popoverComponent = component.find('.custom-popover')

      expect(popoverComponent).to.have.length(1)
    })
  })
})
