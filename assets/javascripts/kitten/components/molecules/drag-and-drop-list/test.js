import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { DragAndDropList } from './index'

describe('<DragAndDropList />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element
      })

      component = renderer.create(<DragAndDropList />).toJSON()
    })

    afterEach(() => {
      ReactDOM.createPortal.mockClear()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with children', () => {
    beforeEach(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element
      })

      component = renderer
        .create(
          <DragAndDropList>
            <p id="1" simpleName="Task #1">
              Task #1
            </p>
            <p id="2" simpleName="Task #2">
              Task #2
            </p>
            <p id="3" simpleName="Task #3">
              Task #3
            </p>
            <p id="4" simpleName="Task #4">
              Task #4
            </p>
          </DragAndDropList>,
        )
        .toJSON()
    })

    afterEach(() => {
      ReactDOM.createPortal.mockClear()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
