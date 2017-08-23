import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { InfoLines } from 'kitten/components/lines/info-lines'

describe('<InfoLines />', () => {
  const infos = [
    { id: '1', key: 'Lorem', value: 'Ipsum' },
    { id: '2', key: 'Dolor', value: 'Sit amet' },
  ]

  describe('by default', () => {
    const infoLines = shallow(<InfoLines infos={ infos } />)

    it('has a default class', () => {
      expect(infoLines).to.have.className('k-InfoLines')
    })

    it('has a good class on info', () => {
      const firstInfo = infoLines.children().first()

      expect(firstInfo).to.have.className('k-InfoLines__line')
    })

    it('has 2 elements', () => {
      const infos = infoLines.children()

      expect(infos).to.have.length(2)
    })
  })

  describe('with className prop', () => {
    const infoLines = shallow(<InfoLines className="custom__class" />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('custom__class')
    })
  })

  describe('with other prop', () => {
    const infoLines = shallow(<InfoLines aria-hidden />)

    it('has an aria-hidden attibute', () => {
      expect(infoLines).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with withoutTopBottomBorder prop', () => {
    const infoLines = shallow(<InfoLines withoutTopBottomBorder />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('k-InfoLines--withoutTopBottomBorder')
    })
  })

  describe('with withoutResponsive prop', () => {
    const infoLines = shallow(<InfoLines withoutResponsive />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('k-InfoLines--withoutResponsive')
    })
  })

  describe('with borderColor prop', () => {
    const infoLines = shallow(<InfoLines borderColor="red" />)

    it('has a red border color', () => {
      expect(infoLines).to.have.style('border-color', 'red')
    })
  })

  describe('with custom props for an element', () => {
    const infoLines = shallow(
      <InfoLines infos={
        [
          {
            id: '1',
            key: 'Foo',
            value: 'Bar',
            className:'custom__class',
            'aria-hidden': true,
          },
        ]
      } />
    )

    const element = infoLines.children().first()

    it('has a good class', () => {
      expect(element).to.have.className('custom__class')
    })

    it('has an aria-hidden attribute', () => {
      expect(element).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with withBorderRadius prop', () => {
    const infoLines = shallow(<InfoLines withBorderRadius />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('k-InfoLines--withBorderRadius')
    })
  })

  describe('with withLeftRightBorder prop', () => {
    const infoLines = shallow(<InfoLines withLeftRightBorder />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('k-InfoLines--withLeftRightBorder')
    })
  })
})
