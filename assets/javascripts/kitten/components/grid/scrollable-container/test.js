import React from 'react'
import renderer from 'react-test-renderer'
import { ScrollableContainer } from './index'

describe('<ScrollableContainer />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<ScrollableContainer />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ScrollableContainer
            shadowColor="#567890"
            className="custom__class"
            style={{ color: 'red' }}
            aria-hidden
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with children', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ScrollableContainer>
            <nav>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </nav>
          </ScrollableContainer>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
