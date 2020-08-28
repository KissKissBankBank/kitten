import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Marger } from '../../../components/layout/marger'

describe('<Marger />', () => {
  describe('by default', () => {
    it('renders a <div /> that wraps its children', () => {
      const tree = renderer
        .create(<Marger>Curioser and curioser</Marger>)
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('with top prop', () => {
    describe('with string prop', () => {
      it('has margin-top CSS rule', () => {
        const tree = renderer.create(<Marger top="1.5" />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-top', '0.9375rem')
      })

      it('works with .5 value', () => {
        const tree = renderer.create(<Marger top=".5" />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-top', '0.3125rem')
      })
    })

    describe('with object prop', () => {
      it('has margin-top CSS rule', () => {
        const tree = renderer
          .create(<Marger top={{ fromXs: 12, fromM: 2, default: 4 }} />)
          .toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-top', '2.5rem')
        expect(tree).toHaveStyleRule('margin-top', '7.5rem', {
          media: '(min-width:480px)',
        })
        expect(tree).toHaveStyleRule('margin-top', '1.25rem', {
          media: '(min-width:768px)',
        })
      })
    })

    describe('with object with `fromXxs` prop', () => {
      it('has default margin-top CSS rule', () => {
        const tree = renderer.create(<Marger top={{ fromXxs: 4 }} />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-top', '2.5rem')
      })

      it('is overrided by the default value', () => {
        const tree = renderer
          .create(<Marger top={{ fromXxs: 4, default: 12 }} />)
          .toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-top', '7.5rem')
      })
    })
  })

  describe('with bottom prop', () => {
    describe('with string prop', () => {
      it('has margin-bottom CSS rule', () => {
        const tree = renderer.create(<Marger bottom="1.5" />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-bottom', '0.9375rem')
      })

      it('works with .5 value', () => {
        const tree = renderer.create(<Marger bottom=".5" />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-bottom', '0.3125rem')
      })
    })

    describe('with object prop', () => {
      it('has margin-bottom CSS rule', () => {
        const tree = renderer
          .create(<Marger bottom={{ fromXs: 12, fromM: 2, default: 4 }} />)
          .toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-bottom', '2.5rem')
        expect(tree).toHaveStyleRule('margin-bottom', '7.5rem', {
          media: '(min-width:480px)',
        })
        expect(tree).toHaveStyleRule('margin-bottom', '1.25rem', {
          media: '(min-width:768px)',
        })
      })
    })

    describe('with object with `fromXxs` prop', () => {
      it('has default margin-bottom CSS rule', () => {
        const tree = renderer
          .create(<Marger bottom={{ fromXxs: 4 }} />)
          .toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-bottom', '2.5rem')
      })

      it('is overrided by the default value', () => {
        const tree = renderer
          .create(<Marger bottom={{ fromXxs: 4, default: 12 }} />)
          .toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('margin-bottom', '7.5rem')
      })
    })
  })

  describe('with fromS to `0` and default value', () => {
    it('has margin-bottom to `0` for S media-query', () => {
      const tree = renderer
        .create(<Marger bottom={{ default: 4, fromS: 0 }} />)
        .toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('margin-bottom', '0rem', {
        media: '(min-width:640px)',
      })
    })
  })

  describe('with other styles', () => {
    it('has a custom style', () => {
      const tree = renderer
        .create(
          <Marger
            bottom={{ fromXs: 12, fromM: 2 }}
            top={{ fromXs: 12, fromM: 2 }}
            style={{ backgroundColor: 'red' }}
          />,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('margin-top', '7.5rem', {
        media: '(min-width:480px)',
      })
      expect(tree).toHaveStyleRule('margin-bottom', '7.5rem', {
        media: '(min-width:480px)',
      })
      expect(tree).toHaveStyleRule('margin-top', '1.25rem', {
        media: '(min-width:768px)',
      })
      expect(tree).toHaveStyleRule('margin-bottom', '1.25rem', {
        media: '(min-width:768px)',
      })
    })
  })

  describe('with other prop', () => {
    it('has a custom class', () => {
      const marger = shallow(<Marger className="custom__class" />)

      expect(marger.hasClass('custom__class')).toBe(true)
    })
  })
})
