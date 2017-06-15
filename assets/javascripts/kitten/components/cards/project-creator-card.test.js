import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectCreatorCard } from 'kitten/components/cards/project-creator-card'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { RightArrowIcon } from 'kitten/components/icons/right-arrow-icon'

describe('<ProjectCreatorCard />', () => {
  describe('by default', () => {
    const projectCreatorCard = shallow(<ProjectCreatorCard />)

    it('is a <div />', () => {
      expect(projectCreatorCard).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(projectCreatorCard.dive()).to.have.className('k-ProjectCreatorCard')
    })
  })

  describe('with date prop', () => {
    const projectCreatorCard = mount(<ProjectCreatorCard date="Custom date" />)
    const icon = projectCreatorCard.find(ClockIcon)

    it('renders a <ClockIcon />', () => {
      expect(icon).to.have.length(1)
    })

    it('renders a date value', () => {
      expect(projectCreatorCard).to.contain.text('Custom date')
    })
  })

  describe('with status props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard statusBackgroundColor="#e6f5fb"
                          statusBorderColor="#cbe8f9"
                          statusText="Custom status" />
    )
    const status = projectCreatorCard.find('.k-ProjectCreatorCard__status')
    const icon = status.find('.k-ProjectCreatorCard__status--icon')
    const text = status.find('.k-ProjectCreatorCard__status--text')

    it('renders a status value', () => {
      expect(status).to.have.length(1)
    })

    it('renders an icon with a style attribute', () => {
      expect(icon).to.have.prop( 'style' )
                  .deep.equal({ backgroundColor: '#e6f5fb', borderColor: '#cbe8f9' })
    })

    it('renders a text value', () => {
      expect(text).to.contain.text('Custom status')
    })
  })

  describe('with href props', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#"
                          isExternal="true" />
    )
    const link = projectCreatorCard.find('.k-ProjectCreatorCard__link')

    it('renders href attributes', () => {
      expect(link).to.have.tagName('a')
      expect(link).to.have.attr('href', '#')
      expect(link).to.have.attr('target', '_blank')
    })
  })

  describe('with linkText prop', () => {
    const projectCreatorCard = mount(
      <ProjectCreatorCard href="#"
                          linkText="Custom text" />)

    it('renders a text content', () => {
      expect(projectCreatorCard).to.contain.text('Custom text')
    })
  })
})
