import React from 'react'
import { CallToActionPopover } from '../../components/popovers/call-to-action-popover'
import { LoudspeakerIllustration } from '../../components/illustrations/loudspeaker-illustration'
import { Button } from '../../components/buttons/button'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'

describe('<CallToActionPopover />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<CallToActionPopover />)

    it('renders a title element', () => {
      const titleElement = defaultComponent.find(Title)

      expect(titleElement).toHaveLength(1)
    })

    it('renders a text element', () => {
      const textElement = defaultComponent.find(Paragraph)

      expect(textElement).toHaveLength(1)
    })

    describe('navigation', () => {
      it('renders a navigation element', () => {
        const navigationElement = defaultComponent.find(
          '.k-Popover__navigation',
        )

        expect(navigationElement).toHaveLength(1)
      })

      it('renders buttons list', () => {
        const buttonsList = defaultComponent.find('.k-Popover__buttons')

        expect(buttonsList).toHaveLength(1)
      })

      it('renders a <Button /> component', () => {
        const buttonComponent = (
          <Button onClick={undefined} modifier="helium" size="big">
            Ok
          </Button>
        )

        expect(defaultComponent.contains(buttonComponent)).toBe(true)
      })
    })
  })

  describe('title prop', () => {
    const title = 'Instantly break out'
    const component = mount(<CallToActionPopover title={title} />)
    const titleElement = component.find(Title)

    it('renders a title element', () => {
      expect(titleElement).toHaveLength(1)
      expect(titleElement.render().text()).toBe(title)
    })
  })

  describe('text prop', () => {
    const text = "Spend all night ensuring people don't sleep"
    const component = mount(<CallToActionPopover text={text} />)
    const textElement = component.find('Paragraph')

    it('renders a text element', () => {
      expect(textElement).toHaveLength(1)
      expect(textElement.text()).toBe(text)
    })
  })

  describe('buttons prop', () => {
    const button1Label = 'Découvrir'
    const button1Modifier = 'berryllium'
    const button1Tag = 'a'
    const button1Href = 'http://www.catipsum.com'
    const button1Target = '_blank'

    const button2Label = 'Retour'

    const buttons = [
      {
        label: button1Label,
        modifier: button1Modifier,
        tag: button1Tag,
        href: button1Href,
        target: button1Target,
      },
      {
        label: button2Label,
      },
    ]

    const component = mount(<CallToActionPopover buttons={buttons} />)
    const buttonComponents = component.find(Button)

    it('renders 2 <Button /> components', () => {
      expect(buttonComponents).toHaveLength(2)
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

      expect(buttonComponent.props()).toMatchObject(expectedProps)
    })

    it('passes the right props to the second <Button />', () => {
      const buttonComponent = buttonComponents.last()
      const expectedProps = {
        children: button2Label,
      }

      expect(buttonComponent.props()).toMatchObject(expectedProps)
    })

    describe('with close callback on a button', () => {
      const buttons = [
        {
          clickOptions: {
            closeOnClick: true,
          },
        },
      ]
      const onCloseClick = () => {
        return
      }

      const component = mount(
        <CallToActionPopover buttons={buttons} onCloseClick={onCloseClick} />,
      )

      it('passes a onClick prop to the <Button />', () => {
        const buttonComponent = component.find('button').first()
        const expectedProps = {
          onClick: onCloseClick,
        }

        expect(buttonComponent.props()).toMatchObject(expectedProps)
      })
    })
  })

  describe('titleAriaLabelId prop', () => {
    const component = mount(
      <CallToActionPopover titleAriaLabelId="custom-aria-label" />,
    )
    const titleElement = component.find('Title')

    it('assigns custom id for aria label', () => {
      expect(titleElement.props().id).toBe('custom-aria-label')
    })
  })

  describe('illustration prop', () => {
    const componentWithIllustration = shallow(
      <CallToActionPopover illustration={LoudspeakerIllustration} />,
    )

    it('renders an illustration wrapper', () => {
      const illustration = componentWithIllustration.find(
        '.k-Popover__illustration',
      )

      expect(illustration).toHaveLength(1)
    })

    it('renders illustration component', () => {
      const illustration = <LoudspeakerIllustration />

      expect(componentWithIllustration.contains(illustration)).toBe(true)
    })
  })

  describe('custom props', () => {
    const component = mount(
      <CallToActionPopover popoverClassName="custom-popover" />,
    )

    it('propagates props to <Popover />', () => {
      const popoverComponent = component.find('.custom-popover')

      expect(popoverComponent).toHaveLength(1)
    })
  })
})
