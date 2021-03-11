import React from 'react'
import renderer from 'react-test-renderer'
import { Grid, GridCol } from './index'

describe('<Grid />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(<Grid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Grid className="custom-className" aria-hidden>
            <p>custom child</p>
          </Grid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

describe('<GridCol />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(<GridCol />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GridCol className="custom-className" aria-hidden>
            <p>custom child</p>
          </GridCol>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GridCol
            col-xs="10"
            offset-xs="1"
            col-s="8"
            offset-s="2"
            col-m="6"
            offset-m="3"
            col-l="4"
            offset-l="4"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
