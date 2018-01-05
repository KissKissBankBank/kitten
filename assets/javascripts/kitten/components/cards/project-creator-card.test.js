import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProjectCreatorCard } from 'kitten/components/cards/project-creator-card'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

describe('<ProjectCreatorCard />', () => {
  describe('by default', () => {
    const projectCreatorCard = mount(<ProjectCreatorCard />)

    test('is a <div />', () => {
      expect(projectCreatorCard).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(projectCreatorCard.hasClass('k-ProjectCreatorCard')).to.equal(true)
    })
  })

  describe('with withoutHover prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" withoutHover />)
    const buttonIcon = projectCreatorCard.find('.k-ButtonIcon--withoutHover')

    test('renders a ButtonIcon with withoutHover class', () => {
      expect(buttonIcon).toHaveLength(1)
    })
  })

  describe('with verticalArrow props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" verticalArrow />)
    const buttonIcon = projectCreatorCard.find('.k-ButtonIcon--verticalArrow')

    test('renders a ButtonIcon with vertical arrow', () => {
      expect(buttonIcon).toHaveLength(1)
    })
  })

  describe('with date prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard date="Custom date" />)
    const icon = projectCreatorCard.find(ClockIcon)

    test('renders a <ClockIcon />', () => {
      expect(icon).toHaveLength(1)
    })

    test('renders a date value', () => {
      expect(projectCreatorCard).to.contain.text('Custom date')
    })
  })

  describe('with status props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard
        statusBackgroundColor="#e6f5fb"
        statusBorderColor="#cbe8f9"
        statusText="Custom status"
      />
    )
    const status = projectCreatorCard.find('.k-ProjectCreatorCard__status')
    const icon = status.find('.k-ProjectCreatorCard__status--icon')
    const text = status.find('.k-ProjectCreatorCard__status--text')

    test('renders a status value', () => {
      expect(status).toHaveLength(1)
    })

    test('renders an icon with a style attribute', () => {
      expect(icon).to.have.prop( 'style' ).toEqual({ backgroundColor: '#e6f5fb', borderColor: '#cbe8f9' })
    })

    test('renders a text value', () => {
      expect(text).to.contain.text('Custom status')
    })
  })

  describe('with href props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard
        href="#"
        isExternal="true"
      />
    )
    const link = projectCreatorCard.find('.k-ProjectCreatorCard__link')
    const separator = link.find('.k-Separator')

    test('renders href attributes', () => {
      expect(link).to.have.tagName('a')
      expect(link).to.have.attr('href', '#')
      expect(link).to.have.attr('target', '_blank')
    })

    test('renders darker attributes', () => {
      expect(separator.hasClass('k-Separator--darker')).to.equal(true)
    })
  })

  describe('with linkText prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard
        href="#"
        linkText="Custom text"
      />
    )

    test('renders a text content', () => {
      expect(projectCreatorCard).to.contain.text('Custom text')
    })
  })
})
