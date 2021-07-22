import React from 'react'
import renderer from 'react-test-renderer'
import { CheckList } from './index'

describe('<LinkBox />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<CheckList />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with CheckList.Item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <CheckList>
            <CheckList.Item done>Task #1</CheckList.Item>
            <CheckList.Item>Task #2</CheckList.Item>
          </CheckList>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
