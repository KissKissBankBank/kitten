import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { InfoLines } from 'kitten/components/lines/info-lines'

describe('<InfoLines />', () => {
  const infos = [
    { key: 'Lorem', value: 'Ipsum' },
    { key: 'Dolor', value: 'Sit amet' },
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

  describe('with borderColorPrimary4 prop', () => {
    const infoLines = shallow(<InfoLines borderColorPrimary4 />)

    it('has a good class', () => {
      expect(infoLines).to.have.className('k-InfoLines--borderColorPrimary4')
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
            'aria-hidden': true
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
})
