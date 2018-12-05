import React from 'react'
import { Marger } from 'kitten/components/layout/marger'

const getMargerElement = element => shallow(element).first().shallow()

describe('<Marger />', () => {
  describe('by default', () => {
    it('renders a <div /> that wraps its children', () => {
      const marger = getMargerElement(<Marger>Curioser and curioser</Marger>)

      expect(marger.is('div')).toBe(true)
      expect(marger.text()).toEqual('Curioser and curioser')
    })
  })

  describe('with top prop', () => {
    describe('with string prop', () => {
      it('has margin-top CSS rule', () => {
        const marger = getMargerElement(<Marger top="1.5" />)
        const styles = marger.props().style

        expect(styles).toEqual({ marginTop: '0.9375rem' })
      })

      it('works with .5 value', () => {
        const marger = getMargerElement(<Marger top=".5" />)
        const styles = marger.props().style

        expect(styles).toEqual({ marginTop: '0.3125rem' })
      })
    })

    describe('with object prop', () => {
      it('has margin-top CSS rule', () => {
        const marger = shallow(
          <Marger top={ { fromXs: 12, fromM: 2, default: 4 } } />,
        )
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-top: 2.5rem')
        expect(html).toContain('@media (min-width: 480px)')
        expect(html).toContain('margin-top: 7.5rem')
        expect(html).toContain('@media (min-width: 768px)')
        expect(html).toContain('margin-top: 1.25rem')
      })
    })

    describe('with object with `fromXxs` prop', () => {
      it('has default margin-top CSS rule', () => {
        const marger = shallow(<Marger top={ { fromXxs: 4 } } />)
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-top: 2.5rem')
      })

      it('is overrided by the default value', () => {
        const marger = shallow(<Marger top={ { fromXxs: 3, default: 12 } } />)
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-top: 7.5rem')
      })
    })
  })

  describe('with bottom prop', () => {
    describe('with string prop', () => {
      it('has margin-bottom CSS rule', () => {
        const marger = getMargerElement(<Marger bottom="1.5" />)
        const styles = marger.props().style

        expect(styles).toEqual({ marginBottom: '0.9375rem' })
      })

      it('works with .5 value', () => {
        const marger = getMargerElement(<Marger bottom=".5" />)
        const styles = marger.props().style

        expect(styles).toEqual({ marginBottom: '0.3125rem' })
      })
    })

    describe('with object prop', () => {
      it('has margin-bottom CSS rule', () => {
        const marger = shallow(
          <Marger bottom={ { fromXs: 12, fromM: 2, default: 4 } } />,
        )
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-bottom: 2.5rem')
        expect(html).toContain('@media (min-width: 480px)')
        expect(html).toContain('margin-bottom: 7.5rem')
        expect(html).toContain('@media (min-width: 768px)')
        expect(html).toContain('margin-bottom: 1.25rem')
      })
    })

    describe('with object with `fromXxs` prop', () => {
      it('has default margin-bottom CSS rule', () => {
        const marger = shallow(<Marger bottom={ { fromXxs: 4 } } />)
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-bottom: 2.5rem')
      })

      it('is overrided by the default value', () => {
        const marger = shallow(<Marger bottom={ { fromXxs: 4, default: 12 } } />)
        const html = marger.html()

        expect(html).toContain('@media (min-width: 0)')
        expect(html).toContain('margin-bottom: 7.5rem')
      })
    })
  })

  describe('with other styles', () => {
    it('has a custom style', () => {
      const marger = shallow(
        <Marger
          bottom={ { fromXs: 12, fromM: 2 } }
          top={ { fromXs: 12, fromM: 2 } }
          style={ { backgroundColor: 'red' } }
        />,
      )
      const html = marger.html()

      expect(html).toContain('@media (min-width: 480px)')
      expect(html).toContain('margin-top: 7.5rem')
      expect(html).toContain('margin-bottom: 7.5rem')
      expect(html).toContain('@media (min-width: 768px)')
      expect(html).toContain('margin-top: 1.25rem')
      expect(html).toContain('margin-bottom: 1.25rem')
      expect(html).toContain('style="background-color:red"')
    })
  })

  describe('with other prop', () => {
    it('has a custom class', () => {
      const marger = getMargerElement(<Marger className="custom__class" />)

      expect(marger.hasClass('custom__class')).toBe(true)
    })
  })
})
