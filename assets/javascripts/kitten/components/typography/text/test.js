import React from 'react'
import { Text } from './index'
import renderer from 'react-test-renderer'

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
})
