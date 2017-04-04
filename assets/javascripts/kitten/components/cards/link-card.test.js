import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { LinkCard } from 'kitten/components/cards/link-card'

describe('<LinkCard />', () => {
  describe('by default', () => {
    const linkCard = shallow(<LinkCard />)

    it('is a <a />', () => {
      expect(linkCard).to.have.tagName('a')
    })

    it('has default classes', () => {
      expect(linkCard).to.have.className('k-LinkCard')
    })
  })

  describe('with custom class', () => {
    const linkCard = shallow(<LinkCard className="custom__class" />)

    it('has a custom class', () => {
      expect(linkCard).to.have.className('custom__class')
    })
  })

  describe('with tag prop', () => {
    const linkCard = shallow(<LinkCard tag="span" />)

    it('has a custom tag', () => {
      expect(linkCard).to.have.tagName('span')
    })
  })

  describe('with shadow prop', () => {
    const linkCard = shallow(<LinkCard shadow />)

    it('has a good class', () => {
      expect(linkCard).to.have.className('k-LinkCard--shadow')
    })
  })

  describe('with translateOnHover prop', () => {
    const linkCard = shallow(<LinkCard translateOnHover />)

    it('has a good class', () => {
      expect(linkCard).to.have.className('k-LinkCard--translateOnHover')
    })
  })

  describe('with other prop', () => {
    const linkCard = shallow(<LinkCard href="#" />)

    it('has an aria-hidden attribute', () => {
      expect(linkCard).to.have.attr('href', '#')
    })
  })

  describe('with children', () => {
    const linkCard = shallow(<LinkCard>Lorem ipsum…</LinkCard>)

    it('has text', () => {
      expect(linkCard).to.have.text('Lorem ipsum…')
    })
  })
})
