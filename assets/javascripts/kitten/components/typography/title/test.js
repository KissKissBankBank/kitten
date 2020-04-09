
import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from './index'

describe('<Title />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Title
            tag="h1"
            modifier="primary"
            margin={false}
            italic={false}
            children="Lorem ipsum dolor sit amet…"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
