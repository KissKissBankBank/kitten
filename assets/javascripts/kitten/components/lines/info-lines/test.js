import React from 'react'
import { InfoLines } from '../../components/lines/info-lines'

describe('<InfoLines />', () => {
  const infos = [
    { id: '1', key: 'Lorem', value: 'Ipsum' },
    { id: '2', key: 'Dolor', value: 'Sit amet' },
  ]

  describe('by default', () => {
    const infoLines = shallow(<InfoLines infos={infos} />)

    it('has a default class', () => {
      expect(infoLines.hasClass('k-InfoLines')).toBe(true)
    })

    it('has a good class on info', () => {
      const firstInfo = infoLines.children().first()

      expect(firstInfo.hasClass('k-InfoLines__line')).toBe(true)
    })

    it('has 2 elements', () => {
      const infos = infoLines.children()

      expect(infos).toHaveLength(2)
    })
  })

  describe('with className prop', () => {
    const infoLines = shallow(<InfoLines className="custom__class" />)

    it('has a good class', () => {
      expect(infoLines.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const infoLines = shallow(<InfoLines aria-hidden />)

    it('has an aria-hidden attibute', () => {
      expect(infoLines.props()['aria-hidden']).toBeTruthy()
    })
  })

  describe('with withoutTopBottomBorder prop', () => {
    const infoLines = shallow(<InfoLines withoutTopBottomBorder />)

    it('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withoutTopBottomBorder')).toBe(
        true,
      )
    })
  })

  describe('with withoutResponsive prop', () => {
    const infoLines = shallow(<InfoLines withoutResponsive />)

    it('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withoutResponsive')).toBe(true)
    })
  })

  describe('with borderColor prop', () => {
    const infoLines = shallow(<InfoLines borderColor="red" />)

    it('has a red border color', () => {
      expect(infoLines.props().style).toMatchObject({
        borderColor: 'red',
      })
    })
  })

  describe('with custom props for an element', () => {
    const infoLines = shallow(
      <InfoLines
        infos={[
          {
            id: '1',
            key: 'Foo',
            value: 'Bar',
            className: 'custom__class',
            'aria-hidden': true,
          },
        ]}
      />,
    )

    const element = infoLines.children().first()

    it('has a good class', () => {
      expect(element.hasClass('custom__class')).toBe(true)
    })

    it('has an aria-hidden attribute', () => {
      expect(element.props()['aria-hidden']).toBe(true)
    })
  })

  describe('with withBorderRadius prop', () => {
    const infoLines = shallow(<InfoLines withBorderRadius />)

    it('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withBorderRadius')).toBe(true)
    })
  })

  describe('with withLeftRightBorder prop', () => {
    const infoLines = shallow(<InfoLines withLeftRightBorder />)

    it('has a good class', () => {
      expect(infoLines.hasClass('k-InfoLines--withLeftRightBorder')).toBe(true)
    })
  })
})
