import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Details } from './index'

describe('<Details />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Details summaryRender={() => <span>Open me!</span>}>
            <p>Content</p>
          </Details>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
