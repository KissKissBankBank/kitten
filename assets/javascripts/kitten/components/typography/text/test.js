import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from './index'

describe('<Text />', () => {
  describe('by default', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tag prop', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text tag="div" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with as prop', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text as="div" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with cssColor and custom style', () => {
    let component

    beforeEach(() => {
      component = renderer
        .create(<Text cssColor="#F00" style={{ fontWeight: '700' }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with antiqueolive font family', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text family="antiqueolive" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
