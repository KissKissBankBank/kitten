import React from 'react'

import { InfoLines } from 'kitten/components/lines/info-lines'

describe('<InfoLines />', () => {
  const infos = [
    { id: '1', key: 'Lorem', value: 'Ipsum' },
    { id: '2', key: 'Dolor', value: 'Sit amet' },
  ]

  describe('by default', () => {
    const infoLines = shallow(<InfoLines infos={ infos } />)

    test('has a default class', () => {
      expect(infoLines.hasClass('k-InfoLines')).to.equal(true)
    })

    test('has a good class on info', () => {
      const firstInfo = infoLines.children().first()

      expect(firstInfo.hasClass('k-InfoLines__line')).to.equal(true)
    })

    test('has 2 elements', () => {
      const infos = infoLines.children()

      expect(infos).toHaveLength(2)
    })
  })

  describe('with className prop', () => {
    const infoLines = shallow(<InfoLines className="custom__class" />)

    test('has a good class', () => {
      expect(infoLines.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other prop', () => {
    const infoLines = shallow(<InfoLines aria-hidden />)

    test('has an aria-hidden attibute', () => {
      expect(infoLines).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with withoutTopBottomBorder prop', () => {
    const infoLines = shallow(<InfoLines withoutTopBottomBorder />)

    test('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withoutTopBottomBorder')).to.equal(true)
    })
  })

  describe('with withoutResponsive prop', () => {
    const infoLines = shallow(<InfoLines withoutResponsive />)

    test('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withoutResponsive')).to.equal(true)
    })
  })

  describe('with borderColor prop', () => {
    const infoLines = shallow(<InfoLines borderColor="red" />)

    test('has a red border color', () => {
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

    test('has a good class', () => {
      expect(element.hasClass('custom__class')).to.equal(true)
    })

    test('has an aria-hidden attribute', () => {
      expect(element).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with withBorderRadius prop', () => {
    const infoLines = shallow(<InfoLines withBorderRadius />)

    test('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withBorderRadius')).to.equal(true)
    })
  })

  describe('with withLeftRightBorder prop', () => {
    const infoLines = shallow(<InfoLines withLeftRightBorder />)

    test('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withLeftRightBorder')).to.equal(true)
    })
  })
})
