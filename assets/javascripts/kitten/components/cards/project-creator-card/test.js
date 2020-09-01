import React from 'react'
import { ProjectCreatorCard } from '../../../components/cards/project-creator-card'
import { ClockIcon } from '../../../components/icons/clock-icon'

describe('<ProjectCreatorCard />', () => {
  describe('by default', () => {
    const projectCreatorCard = mount(<ProjectCreatorCard />)

    it('is a <div />', () => {
      expect(projectCreatorCard.render().is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(projectCreatorCard.render().hasClass('k-ProjectCreatorCard')).toBe(
        true,
      )
    })
  })

  describe('with withoutHover prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" withoutHover />,
    )
    const buttonIcon = projectCreatorCard.find('.k-ButtonIcon--withoutHover')

    it('renders a ButtonIcon with withoutHover class', () => {
      expect(buttonIcon).toHaveLength(1)
    })
  })

  describe('with verticalArrow props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" verticalArrow />,
    )
    const buttonIcon = projectCreatorCard.find('.k-ButtonIcon--verticalArrow')

    it('renders a ButtonIcon with vertical arrow', () => {
      expect(buttonIcon).toHaveLength(1)
    })
  })

  describe('with date prop', () => {
    const projectCreatorCard = mount(<ProjectCreatorCard date="Custom date" />)
    const icon = projectCreatorCard.find(ClockIcon)

    it('renders a <ClockIcon />', () => {
      expect(icon).toHaveLength(1)
    })

    it('renders a date value', () => {
      expect(projectCreatorCard.contains('Custom date')).toBe(true)
    })
  })

  describe('with status props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard
        statusBackgroundColor="#e6f5fb"
        statusBorderColor="#cbe8f9"
        statusText="Custom status"
      />,
    )
    const status = projectCreatorCard.find('.k-ProjectCreatorCard__status')
    const icon = status.find('.k-ProjectCreatorCard__status--icon')
    const text = status.find('.k-ProjectCreatorCard__status--text')

    it('renders a status value', () => {
      expect(status).toHaveLength(1)
    })

    it('renders an icon with a style attribute', () => {
      expect(icon.props().style).toMatchObject({
        backgroundColor: '#e6f5fb',
        borderColor: '#cbe8f9',
      })
    })

    it('renders a text value', () => {
      expect(text.contains('Custom status')).toBe(true)
    })
  })

  describe('with href props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" isExternal="true" />,
    )
    const link = projectCreatorCard.find('.k-ProjectCreatorCard__link')
    const separator = link.find('.k-Separator')

    it('renders href attributes', () => {
      expect(link.type()).toBe('a')
      expect(link.props().href).toBe('#')
      expect(link.props().target).toBe('_blank')
    })

    it('renders darker attributes', () => {
      expect(separator.hasClass('k-Separator--darker')).toBe(true)
    })
  })

  describe('with linkText prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#" linkText="Custom text" />,
    )

    it('renders a text content', () => {
      expect(projectCreatorCard.contains('Custom text')).toBe(true)
    })
  })
})
