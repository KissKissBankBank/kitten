import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Marger } from 'kitten/components/layout/marger'

const cleanStyles = styles =>
  styles.filter(rule => rule != null).filter(rule => rule != false)

describe('<Marger />', () => {
  describe('by default', () => {
    it('renders a <div /> that wraps its children', () => {
      const marger = shallow(<Marger>Curioser and curioser</Marger>)
        .dive()
        .children()
        .first()
        .dive()
        .first()
        .children()
        .first()

      expect(marger.is('div')).toBe(true)
      expect(marger.text()).toEqual('Curioser and curioser')
    })
  })

  describe('with top prop', () => {
    describe('with string prop', () => {
      it('has margin-top CSS rule', () => {
        const marger = shallow(<Marger top="1.5" />)
          .dive()
          .children()
          .first()
          .dive()
          .first()
          .children()
          .first()
        const styles = cleanStyles(marger.props().style)

        expect(styles).toEqual([{ marginTop: '0.9375rem' }])
      })
    })

    describe('with object prop', () => {
      it('has margin-top CSS rule', () => {
        const marger = shallow(<Marger top={{ xs: 12, m: 2, default: 4 }} />)
          .dive()
          .children()
          .first()
          .dive()
          .first()
          .children()
          .first()
        const styles = cleanStyles(marger.props().style)

        expect(styles).toEqual([
          { marginTop: '2.5rem' },
          { '@media (max-width: 639px)': { marginTop: '7.5rem' } },
          { '@media (max-width: 1079px)': { marginTop: '1.25rem' } },
        ])
      })
    })
  })

  describe('with bottom prop', () => {
    describe('with string prop', () => {
      it('has margin-bottom CSS rule', () => {
        const marger = shallow(<Marger bottom="1.5" />)
          .dive()
          .children()
          .first()
          .dive()
          .first()
          .children()
          .first()
        const styles = cleanStyles(marger.props().style)

        expect(styles).toEqual([{ marginBottom: '0.9375rem' }])
      })
    })

    describe('with object prop', () => {
      it('has margin-bottom CSS rule', () => {
        const marger = shallow(<Marger bottom={{ xs: 12, m: 2, default: 4 }} />)
          .dive()
          .children()
          .first()
          .dive()
          .first()
          .children()
          .first()
        const styles = cleanStyles(marger.props().style)

        expect(styles).toEqual([
          { marginBottom: '2.5rem' },
          { '@media (max-width: 639px)': { marginBottom: '7.5rem' } },
          { '@media (max-width: 1079px)': { marginBottom: '1.25rem' } },
        ])
      })
    })
  })

  describe('with other styles', () => {
    it('has a custom style', () => {
      const marger = shallow(
        <Marger
          bottom={{ xs: 12, m: 2 }}
          top={{ xs: 12, m: 2 }}
          style={{ backgroundColor: 'red' }}
        />,
      )
        .dive()
        .children()
        .first()
        .dive()
        .first()
        .children()
        .first()
      const styles = cleanStyles(marger.props().style)

      expect(styles).toMatchObject([
        { backgroundColor: 'red' },
        { '@media (max-width: 639px)': { marginTop: '7.5rem' } },
        { '@media (max-width: 639px)': { marginBottom: '7.5rem' } },
        { '@media (max-width: 1079px)': { marginTop: '1.25rem' } },
        { '@media (max-width: 1079px)': { marginBottom: '1.25rem' } },
      ])
    })
  })

  describe('with other prop', () => {
    it('has a custom class', () => {
      const marger = shallow(<Marger className="custom__class" />)
        .dive()
        .children()
        .first()
        .dive()
        .first()
        .children()
        .first()

      expect(marger.hasClass('custom__class')).toBe(true)
    })
  })
})
