import React from 'react'
import { SideGrid, SideGridContent, SideGridAside } from './index'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('<SideGrid />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<SideGrid className="customClassName">Foobar</SideGrid>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with all components', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SideGrid
            className="customClassName"
            containerClassName="customClassName"
            rowClassName="customClassName"
            asidePosition="start"
            asideSize="big"
          >
            <SideGridContent className="customClassName">
              Main content test text
            </SideGridContent>
            <SideGridAside
              className="customClassName"
              contentClassName="customClassName"
            >
              Aside test text
            </SideGridAside>
          </SideGrid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
